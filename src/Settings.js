function URLS() {
	function Login() {
		const URL = "https://bluegoldfish.dk/examsem3/api/login";
		return URL;
	}
	function User() {
		const URL = "https://bluegoldfish.dk/examsem3/api/info/user";
		return URL;
	}

	function Admin() {
		const URL = "https://bluegoldfish.dk/examsem3/api/info/admin";
		return URL;
	}

	function AdminData() {
		const URL = "https://bluegoldfish.dk/examsem3/api/fetch";
		return URL;
	}

	function Dog() {
		const URL = "https://bluegoldfish.dk/examsem3/api/fetch/dogpic";
		return URL;
	}
	function Cat() {
		const URL = "https://bluegoldfish.dk/examsem3/api/fetch/catpic";
		return URL;
	}

	return { Login, User, Admin, AdminData, Dog, Cat };
}
export default new URLS();
