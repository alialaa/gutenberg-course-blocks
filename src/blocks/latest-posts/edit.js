import { Component } from "@wordpress/element";
import { withSelect } from "@wordpress/data";
import { __ } from "@wordpress/i18n";
import { decodeEntities } from "@wordpress/html-entities";
import { RangeControl, PanelBody } from "@wordpress/components";
import { InspectorControls } from "@wordpress/editor";

class LatestPostsEdit extends Component {
    onChangeNumberOfPosts = numberOfPosts => {
        this.props.setAttributes({ numberOfPosts });
    };
    render() {
        const { posts, className, attributes } = this.props;
        const { numberOfPosts } = attributes;
        return (
            <>
                <InspectorControls>
                    <PanelBody title={__("Posts Settings", "mytheme-blocks")}>
                        <RangeControl
                            label={__("Number of Posts", "mytheme-blocks")}
                            value={numberOfPosts}
                            onChange={this.onChangeNumberOfPosts}
                            min={1}
                            max={10}
                        />
                    </PanelBody>
                </InspectorControls>
                {posts && posts.length > 0 ? (
                    <ul className={className}>
                        {posts.map(post => (
                            <li key={post.id}>
                                <a
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    href={post.link}
                                >
                                    {decodeEntities(post.title.rendered)}
                                </a>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <div>
                        {" "}
                        {posts
                            ? __("No Posts Found", "mytheme-blocks")
                            : __("Loading...", "mytheme-blocks")}{" "}
                    </div>
                )}
            </>
        );
    }
}

export default withSelect((select, props) => {
    const { attributes } = props;
    const { numberOfPosts } = attributes;
    let query = { per_page: numberOfPosts };
    return {
        posts: select("core").getEntityRecords("postType", "post", query)
    };
})(LatestPostsEdit);
