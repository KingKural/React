import ObjectLogin from "../../components/objectLogin";
import ObjectPagination from "../../components/objectPagination";
import PhoneBook from "../../components/objectPhoneBook";


function ObjectPaginationPage() {
    return <>
    <h1>Person Of interest</h1>
        <ObjectPagination />
        <ObjectLogin />
        <PhoneBook />
    </>

}

export default ObjectPaginationPage;