export const authEndPoint = "https://accounts.spotify.com/authorize";
const redirecturl = "http://localhost:3000/";

const clientId = "";
const scopes = [
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state",
];

export const getTokenFromUrl = () => {
    return window.location.hash.substring(1).split("&").reduce((initial,item) => {
        var parts = item.split("=");
        initial[parts[0]] = decodeURIComponent(parts[1]);
        return initial;
    },{});
}

export const loginurl = `${authEndPoint}?client_id=${clientId}&redirect_uri=${redirecturl}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`;
