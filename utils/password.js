import bcrypt from "bcrypt";

export class Password {
    async hashPassword(password) {
        return bcrypt.hash(password, 10)
    }

    async comparePassword(password, hash) {
        return bcrypt.compare(password, hash)
    }
}