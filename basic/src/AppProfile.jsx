import Profile from "./components/Profile";
import Avatar from "./components/Avatar";
import "./App.css";

function AppProfile() {
  return (
    <>
      <Avatar
        image="https://images.unsplash.com/photo-1687360440101-739008e55576?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=900&q=60"
        isNew={true}
      />
      <Profile
        image="https://images.unsplash.com/photo-1687360440101-739008e55576?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=900&q=60"
        name="James Kim"
        isNew={true}
        title="프론트엔드 개발자"
      />
      <Profile
        image="https://images.unsplash.com/photo-1694943091892-b5fcb10c0129?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3164&q=80"
        name="Anna Young"
        title="백엔드 개발자"
      />
      <Profile
        image="https://images.unsplash.com/photo-1694875718534-01765dde16e4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3086&q=80"
        name="Bob Yu"
        title="프론트앤드 개발자"
      />
    </>
  );
}

export default AppProfile;
