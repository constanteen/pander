export const checkEmailInDB = (data: string | any[]) => {
    if (data.length > 0) {
        // email already exists. Handle error.
        throw new Error('Email Already Exists');
    }
}