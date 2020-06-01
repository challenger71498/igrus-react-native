class TagData {
    public name: string;
    public color: string;

    constructor(name: string, color: string) {
        this.name = name;
        this.color = color;
    }

    public static GetDummyData(): TagData {
        return new TagData("테스트 태그", "#ca3");
    }
}

export default TagData;
