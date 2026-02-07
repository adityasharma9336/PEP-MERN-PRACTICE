function updateProfile() {
    const name = document.getElementById("newName").value;
    const bio = document.getElementById("newBio").value;
    const image = document.getElementById("newImage").value;

    if (name !== "") {
        document.getElementById("name").innerText = name;
    }

    if (bio !== "") {
        document.getElementById("bio").innerText = bio;
    }

    if (image !== "") {
        document.getElementById("profilePic").src = image;
    }

    // Clear inputs after update
    document.getElementById("newName").value = "";
    document.getElementById("newBio").value = "";
    document.getElementById("newImage").value = "";
}
