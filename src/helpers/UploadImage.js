export const uploadImage = async (img) => {
  const cloudUrl = "https://api.cloudinary.com/v1_1/cacigaoff/upload";
  const formData = new FormData();
  formData.append("upload_preset", "gcr7mukd");
  formData.append("file", img);

  const response = await fetch(cloudUrl, {
    method: "POST",
    body: formData,
  });
  const cloudResponse = await response.json();
  console.log(cloudResponse);

  return cloudResponse.secure_url;
};
