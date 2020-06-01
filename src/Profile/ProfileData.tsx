class ProfileData {
    public name: string;
    public sid: number;
    public phone: string[] = ['', '', ''];
    public email: string;
    public major: string;

    public constructor(name: string, sid: number, phone: string[], email: string, major: string) {
        this.name = name;
        this.sid = sid;
        this.phone = phone;
        this.email = email;
        this.major = major;
    }

    public GetFullPhoneString(): string {
        return this.phone.join('-');
    }

    public GetFullPhoneNumber(): number {
        return Number(this.phone.join(''));
    }

    public static GetDummyData(): ProfileData {
        return new ProfileData("홍길동", 12181632, ['010', '1234', '5678'], 'foo@bar.com', '컴퓨터공학과');
    }
}

export default ProfileData;
