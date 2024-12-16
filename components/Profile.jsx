import PromptCard from "./PromptCard"

const Profile = ({name, desc, data, handleEdit, handleDelete}) => {
    return (
    <section className="w-full">
      <h1 className="head_text text-left blue_gradient">{name} Profile</h1>
      <p className="text-left desc">{desc}</p>

      <div className="prompt_layout mt-16">
      {data.map((post) => (
        <PromptCard
          key={post._id}
          post={post}
          handleEdit={()=>handleEdit && handleEdit(post)}
          handleDelete={()=>handleDelete && handleDelete(post)}
        />
      ))}
    </div>
    </section>
  )
}

export default Profile
