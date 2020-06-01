import ProfileData from "../Profile/ProfileData";
import TagData from "../Tag/TagData";

class ArticleData {
    public profileData: ProfileData;
    public article: string;
    public likes: number;
    public tags: TagData[];

    constructor(profileData: ProfileData, article: string, likes: number, tags: TagData[]) {
        this.article = article;
        this.profileData = profileData;
        this.likes = likes;
        this.tags = tags;
    }

    public static GetDummyData(): ArticleData {
        return new ArticleData(ProfileData.GetDummyData(),
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\n\n Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            1234, [TagData.GetDummyData()]);
    }
}

export default ArticleData;
