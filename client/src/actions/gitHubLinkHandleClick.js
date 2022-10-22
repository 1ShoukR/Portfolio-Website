export const gitHubLinkHandleClick = (props) => {
    console.log("this is github Link Props", props)
    window.open(`${props?.project?.githubLink}`, '_blank');
};