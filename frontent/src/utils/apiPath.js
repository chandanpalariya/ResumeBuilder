export const BASE_URL="https://resumebuilder-kbdm.onrender.com"

//routes used for frontent

export const API_PATH={
    AUTH:{
        REGISTER:"/api/auth/register",
        LOGIN:"/api/auth/login",
        GET_PROFILE:"/api/auth/profile"
    },

    RESUME:{
        CREATE:"/api/resume",
        GET_All:"/api/resume",
        GET_BY_ID:(id)=>`/api/resume/${id}`,

        UPDATE:(id)=>`/api/resume/${id}`,
        DELETE:(id)=>`/api/resume/${id}`,
        UPLOAD_IMAGES:(id)=>`/api/resume/${id}/upload-images`,


    },

    image:{
        UPLOAD_IMAGE:"/api/auth/upload-image"
    }
}
