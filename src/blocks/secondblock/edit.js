import { Component } from "@wordpress/element";
import { __ } from "@wordpress/i18n";
import {
    RichText,
    BlockControls,
    InspectorControls,
    AlignmentToolbar,
    PanelColorSettings,
    withColors,
    ContrastChecker
} from "@wordpress/editor";
import classnames from "classnames";

class Edit extends Component {
    onChangeContent = content => {
        this.props.setAttributes({ content });
    };

    onChangeAlignment = alignment => {
        this.props.setAttributes({ alignment });
    };

    toggleShadow = () => {
        this.props.setAttributes({ shadow: !this.props.attributes.shadow });
    };

    render() {
        //console.log(this.props);
        const {
            className,
            attributes,
            setTextColor,
            setBackgroundColor,
            backgroundColor,
            textColor
        } = this.props;
        const { content, alignment, shadow } = attributes;
        const classes = classnames(className, {
            "has-shadow": shadow
        });
        return (
            <>
                <InspectorControls>
                    <PanelColorSettings
                        title={__("Panel", "mytheme-blocks")}
                        colorSettings={[
                            {
                                value: backgroundColor.color,
                                onChange: setBackgroundColor,
                                label: __("Backgorund Colour", "mytheme-blocks")
                            },
                            {
                                value: textColor.color,
                                onChange: setTextColor,
                                label: __("Text Colour", "mytheme-blocks")
                            }
                        ]}
                    >
                        <ContrastChecker
                            textColor={textColor.color}
                            backgroundColor={backgroundColor.color}
                        />
                    </PanelColorSettings>
                </InspectorControls>
                <BlockControls
                    controls={[
                        {
                            icon: "wordpress",
                            title: __("Shadow", "mytheme-blocks"),
                            onClick: this.toggleShadow,
                            isActive: shadow
                        }
                    ]}
                >
                    <AlignmentToolbar
                        value={alignment}
                        onChange={this.onChangeAlignment}
                    />
                </BlockControls>
                <RichText
                    tagName="p"
                    className={classes}
                    onChange={this.onChangeContent}
                    value={content}
                    formattingControls={["bold"]}
                    style={{
                        textAlign: alignment,
                        backgroundColor: backgroundColor.color,
                        color: textColor.color
                    }}
                />
            </>
        );
    }
}

export default withColors("backgroundColor", { textColor: "color" })(Edit);
