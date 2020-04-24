const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export default (emails) => {
	// Turns string into seperate email in an array
	const invalidEmails = emails
		.split(",")
		.map((email) => email.trim())
		.filter((email) => re.test(email) === false);

	// Check for last index of invalid emails
	if (invalidEmails[invalidEmails.length - 1] === "") {
		invalidEmails.pop();
	}

	if (invalidEmails.length) {
		return `These emails are invalid ${invalidEmails}`;
	}

	return;
};
