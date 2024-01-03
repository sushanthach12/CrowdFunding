import jwt from 'jsonwebtoken';

const SignToken = async (email) => {
    const token = jwt.sign({ id: email }, process.env.NEXT_PUBLIC_JWT_SECRET, { expiresIn: '1d' });
    console.log(token)
    return token;
}

export default SignToken;