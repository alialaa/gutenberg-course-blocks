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
import { RangeControl, PanelBody } from "@wordpress/components";
import classnames from "classnames";

class Edit extends Component {
    onChangeContent = content => {
        this.props.setAttributes({ content });
    };

    onChangeAlignment = textAlignment => {
        this.props.setAttributes({ textAlignment });
    };

    toggleShadow = () => {
        this.props.setAttributes({ shadow: !this.props.attributes.shadow });
    };

    onChangeShadowOpacity = shadowOpacity => {
        this.props.setAttributes({ shadowOpacity });
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
        const { content, textAlignment, shadow, shadowOpacity } = attributes;
        const classes = classnames(className, {
            "has-shadow": shadow,
            [`shadow-opacity-${shadowOpacity * 100}`]: shadowOpacity
        });
        return (
            <>
                <InspectorControls>
                    <PanelBody title={__("Setting", "mytheme-blocks")}>
                        {shadow && (
                            <RangeControl
                                label={__("Shadow Opacity", "mytheme-blocks")}
                                value={shadowOpacity}
                                onChange={this.onChangeShadowOpacity}
                                min={0.1}
                                max={0.4}
                                step={0.1}
                            />
                        )}
                    </PanelBody>
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
                        value={textAlignment}
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
                        textAlign: textAlignment,
                        backgroundColor: backgroundColor.color,
                        color: textColor.color
                    }}
                />
            </>
        );
    }
}

export default withColors("backgroundColor", { textColor: "color" })(Edit);
