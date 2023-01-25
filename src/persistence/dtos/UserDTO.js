class UserDTO {
    constructor(data) {
        this._id = data._id;
        this.username = data.username;
        this.email = data.email;
        this.roles = data.roles;
        this.fullName = `${data.firstName} ${data.lastName}`;
        this.imgUrl = data.imgUrl;
        this.desc = data.desc;
        this.phone = data.phone;
        this.createdAt = data.createdAt;
        this.updatedAt = data.updatedAt;
    };
};

export default UserDTO;