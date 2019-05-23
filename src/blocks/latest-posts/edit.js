import { Component } from "@wordpress/element";
import { withSelect } from "@wordpress/data";

class LatestPostsEdit extends Component {
    render() {
        //console.log(this.props);
        return <p> dsjljl </p>;
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
