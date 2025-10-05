/* eslint-disable */
export default async () => {
    const t = {};
    return { "@nestjs/swagger": { "models": [[import("./modules/class-validation/http/dtos/create-user.dto.js"), { "CreateUserRequestDto": { email: { required: true, type: () => String, format: "email" }, password: { required: true, type: () => String } } }]], "controllers": [[import("./app.controller.js"), { "AppController": { "getHello": { type: String } } }]] } };
};