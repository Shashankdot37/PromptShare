import Feed from '@components/Feed'

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
        <h1 className="text-center head_text">
            Discover and Share
            <br className="max-md:hidden sm:visible md:visible"/>
            <span className="text-center orange_gradient"> AI Powered Prompts</span>
        </h1>
        <p className="desc text-center">
            PromptShare is the open source AI prompting tool for modern world to discover, create and share the creative prompt.
        </p>
        <Feed/>
    </section>
  )
}

export default Home
