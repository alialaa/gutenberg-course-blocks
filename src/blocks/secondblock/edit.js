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

class Edit extends Component {
    onChangeContent = content => {
        this.props.setAttributes({ content });
    };

    onChangeAlignment = alignment => {
        this.props.setAttributes({ alignment });
    };

    // onChangeBackgroundColor = backgroundColor => {
    //     this.props.setAttributes({ backgroundColor });
    // };

    // onChangeTextColor = textColor => {
    //     this.props.setAttributes({ textColor });
    // };
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
        const { content, alignment } = attributes;
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
                <BlockControls>
                    <AlignmentToolbar
                        value={alignment}
                        onChange={this.onChangeAlignment}
                    />
                </BlockControls>
                <RichText
                    tagName="p"
                    className={className}
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
