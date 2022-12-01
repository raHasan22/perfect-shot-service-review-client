const { useEffect } = require("react")

const useTitle = title =>{
    useEffect(() =>{
        document.title = `${title} - Perfect Shot`;
    }, [title])
};

export default useTitle;