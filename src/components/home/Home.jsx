import M from "../../messages";
const Home = () => {
    return (
        <div className="grid-rows-1 grid grid-cols-2">
            <div className="relative w-fit">
                <p className="text-white">{M.tag_role}</p>
                <h1 className="text-white text-5xl">Subhakanta</h1>
                <h1 className="text-white text-5xl">Roul</h1>
                <p className="text-white text-right">{M.tag_close_role}</p>
            </div>
            <div className="w-fit">
                <p className="text-white">{M.tag_about_me}</p>
                <p className="text-white">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id
                    mollitia ad consectetur ea incidunt, dicta vero! Quos esse
                    odio laborum, accusantium fuga officia ad, dolor harum
                    magnam sed tempora vel provident officiis doloremque iure ex
                    quasi voluptatem eligendi eveniet soluta.
                </p>
                <p className="text-white text-right">{M.tag_close_about_me}</p>
            </div>
        </div>
    );
};
export default Home;
