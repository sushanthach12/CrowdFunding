export const ConvertToBase64 = async (imageUrl) => {
    let base64 = "";
    const reader = new FileReader();
    reader.readAsDataURL(imageUrl);
    reader.onload = () => {
        console.log(reader.result);
        base64 = reader.result;
        return reader.result;
    }
    reader.onerror = (error) => {
        console.log("Error: " + error)
    }
}