import "./styles.editor.scss";
import { registerBlockType } from "@wordpress/blocks";
import { __ } from "@wordpress/i18n";
import { RichText, BlockControls, AlignmentToolbar } from "@wordpress/editor";
//import { Toolbar, DropdownMenu } from "@wordpress/components";

registerBlockType("mytheme-blocks/secondblock", {
    title: __("Second Block", "mytheme-blocks"),
    description: __("Our second block", "mytheme-blocks"),
    category: "layout",
    icon: (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path d="M0 0h24v24H0z" fill="none" />
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
        </svg>
    ),
    keywords: [__("photo", "mytheme-blocks"), __("image", "mytheme-blocks")],
    attributes: {
        content: {
            type: "string",
            source: "html",
            selector: "p"
        },
        alignment: {
            type: "string"
        }
    },

    edit: ({ className, attributes, setAttributes }) => {
        //console.log(attributes);
        const { content, alignment } = attributes;
        const onChangeContent = content => {
            setAttributes({ content });
        };

        const onChangeAlignment = alignment => {
            setAttributes({ alignment });
        };

        return (
            <>
                <BlockControls>
                    <AlignmentToolbar
                        value={alignment}
                        onChange={onChangeAlignment}
                    />
                </BlockControls>
                <RichText
                    tagName="p"
                    className={className}
                    onChange={onChangeContent}
                    value={content}
                    formattingControls={["bold"]}
                    style={{ textAlign: alignment }}
                />
            </>
        );
    },
    save: ({ attributes }) => {
        const { content, alignment } = attributes;
        return (
            <RichText.Content
                tagName="p"
                value={content}
                style={{ textAlign: alignment }}
            />
        );
    }
});
