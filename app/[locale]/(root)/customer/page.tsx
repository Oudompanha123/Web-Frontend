import {useTranslations} from "next-intl";

const Page = () => {
    const translated = useTranslations("Index");

    return (
        <div>
            <h1>{translated("title")}</h1>
            <p>{translated("description")}</p>
        </div>
    );
};

export default Page;