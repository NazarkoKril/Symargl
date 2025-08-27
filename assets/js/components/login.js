(function () {
	const root = document.getElementById("auth");
	const views = Array.from(root.querySelectorAll(".auth__view"));
	const show = (cls) => {
		views.forEach((v) => v.classList.remove("is-active"));
		root.querySelector(".auth__view--" + cls).classList.add("is-active");
		window.scrollTo({ top: root.offsetTop - 40, behavior: "smooth" });
	};

	root.addEventListener("click", (e) => {
		if (e.target.closest(".to-login")) {
			show("login");
		} else if (e.target.closest(".to-signup")) {
			show("signup");
		} else if (e.target.closest(".to-reset")) {
			show("reset");
		} else if (e.target.closest(".to-sent")) {
			show("sent");
		} else if (e.target.closest(".to-changed")) {
			show("changed");
		} else if (e.target.closest(".do-login")) {
			window.location.href = "/page/account.html";
		} else if (e.target.closest(".do-signup")) {
			show("login");
		} else if (e.target.closest(".do-oauth")) {
			alert("OAuth (демо)");
		}

		const t = e.target.closest(".auth-toggle");
		if (t) {
			const input = t.parentElement.querySelector("input");
			const icon = t.querySelector("img");
			if (input) {
				if (input.type === "password") {
					input.type = "text";
					icon.src = "/assets/img/icons/eye.svg";
					icon.alt = "Сховати пароль";
					t.classList.add("active");
				} else {
					input.type = "password";
					icon.src = "/assets/img/icons/hide_eye.svg";
					icon.alt = "Показати пароль";
					t.classList.remove("active");
				}
			}
		}
	});
})();
