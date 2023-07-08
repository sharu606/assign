const cursor = document.querySelector(".custom_cursor");

window.onload = function () {
  const loggedIn = localStorage.getItem("loggedIn");
  if (loggedIn === "1") {
    document.getElementById("landingPage").style.display = "none";
    document.getElementById("homePage").style.display = "block";
    document.getElementById("register").style.display = "none";
    document.getElementById("logout").style.display = "block";
    document.getElementById("login").style.display = "none";
  }
};

document.addEventListener("mousemove", (e) => {
  cursor.setAttribute(
    "style",
    "top: " + (e.pageY - 10) + "px; left: " + (e.pageX - 10) + "px;"
  );
});

function registerHandler() {
  document.getElementById("registerPage").style.display = "block";
  document.getElementById("landingPage").style.display = "none";
  document.getElementById("register").style.display = "none";
  document.getElementById("logout").style.display = "block";
  document.getElementById("login").style.display = "none";
}

function submitHandler(event) {
  event.preventDefault();

  const form = document.getElementById("registerForm");
  if (!form.checkValidity()) {
    console.log(90);
    document.getElementById("alert2").style.display = "block";
    setTimeout(function () {
      document.getElementById("alert2").style.display = "none";
    }, 10000);
    return;
  }

  var username = document.getElementById("inputUsername").value;
  var password = document.getElementById("password").value;

  const obj = {
    username: username,
    password: password,
  };

  users.push(obj);
  localStorage.setItem("users", JSON.stringify(users));
  localStorage.setItem("loggedIn", "1");
  document.getElementById("registerPage").style.display = "none";
  document.getElementById("homePage").style.display = "block";
}

function cancelHandler() {
  document.getElementById("registerPage").style.display = "none";
  document.getElementById("landingPage").style.display = "block";
}

var users = localStorage.getItem("users");
if (users !== null) {
  users = JSON.parse(users);
} else {
  localStorage.setItem("users", "[]");
}

function loginHandler() {
  var username = document.getElementById("uname").value;
  var password = document.getElementById("pword").value;
  var found = false;

  users.forEach(function (user, index, array) {
    if (user.username === username) {
      if (user.password === password) {
        document.getElementById("landingPage").style.display = "none";
        document.getElementById("homePage").style.display = "block";
        var modal = document.getElementById("exampleModalCenter");
        var modalInstance = bootstrap.Modal.getInstance(modal);
        modalInstance.hide();
        document.getElementById("register").style.display = "none";
        document.getElementById("logout").style.display = "block";
        document.getElementById("login").style.display = "none";
        localStorage.setItem("loggedIn", "1");
        found = true;
      }
    }
  });

  if (!found || users == []) {
    document.getElementById("alert").style.display = "block";
    setTimeout(function () {
      document.getElementById("alert").style.display = "none";
    }, 10000);
  }
}

function logoutHandler() {
  document.getElementById("register").style.display = "block";
  document.getElementById("logout").style.display = "none";
  document.getElementById("login").style.display = "block";
  document.getElementById("landingPage").style.display = "block";
  document.getElementById("homePage").style.display = "none";
  localStorage.setItem("loggedIn", "0");
}

const candidates = [
  {
    id: "1",
    name: "S Sharanya",
    exp: 2,
    qual: "B. E",
    role: "Software Engineer",
    loc: "Bangalore",
    pic: "profile1",
    tech: 3,
    comm: 2,
  },
  {
    id: "2",
    name: "S Sirisha",
    exp: 1,
    qual: "B. Sc",
    role: "Associate Engineer",
    loc: "Chennai",
    pic: "profile2",
    tech: 4,
    comm: 3,
  },
  {
    id: "3",
    name: "Tony Stark",
    exp: 3,
    qual: "B. E, M. E",
    role: "Software Engineer",
    loc: "Pune",
    pic: "profile4",
    tech: 2,
    comm: 5,
  },
  {
    id: "4",
    name: "Rory",
    exp: 2,
    qual: "B. Sc, M. Sc",
    role: "Lead",
    loc: "Chennai",
    pic: "profile3",
    tech: 3,
    comm: 4,
  },
  {
    id: "5",
    name: "Jamie",
    exp: 6,
    qual: "BCA",
    role: "Associate Engineer",
    loc: "Bangalore",
    pic: "profile2",
    tech: 2,
    comm: 4,
  },
  {
    id: "6",
    name: "John",
    exp: 7,
    qual: "B. E, MBA",
    role: "Lead",
    loc: "Pune",
    pic: "profile4",
    tech: 4,
    comm: 4,
  },
  {
    id: "7",
    name: "Sarah",
    exp: 4,
    qual: "B. Tech",
    role: "Software Engineer",
    loc: "Bangalore",
    pic: "profile1",
    tech: 1,
    comm: 4,
  },
];

var candidatesHTML = ``;

candidates.forEach(function (c, index, array) {
  candidatesHTML += `<div class="candidate p-3 m-1">
  <img src="./assets/${c.pic}.jpg" alt="profile" class="profile" />
  <div class="mx-5 ok">
    <p>${c.name}</p>
    <div style="font-size: 0.8rem" class="ok">
      <div class="row mt-2">
        <div class="col-3">Qualifications :</div>
        <div class="col">${c.qual}</div>
      </div>
      <div class="row">
        <div class="col-3">Experience :</div>
        <div class="col">${c.exp} yrs</div>
      </div>
      <div class="row">
        <div class="col-3">Role :</div>
        <div class="col">${c.role}</div>
      </div>
      <div class="row mb-2">
        <div class="col-3">Location :</div>
        <div class="col">${c.loc}</div>
      </div>
      <a href="https://drive.google.com/file/d/1SxV1INpotmLCUKLI5n4XSKKBxyWAJUkv/view?usp=sharing" class="btn p-1 resume">Resume</a>
    </div>
  </div>
</div>`;
});

document.getElementById("candidatesList").innerHTML = candidatesHTML;

function search() {
  const loc = document.getElementById("location").value;
  const role = document.getElementById("role").value;

  var candidatesHTML = ``;

  candidates.forEach(function (c, index, array) {
    if (
      (loc != "" && role != "" && loc == c.loc && role == c.role) ||
      (loc != "" && role === "" && loc == c.loc) ||
      (role != "" && loc === "" && role == c.role) ||
      (loc === "" && role === "")
    ) {
      candidatesHTML += `<div class="candidate p-3 m-1">
  <img src="./assets/${c.pic}.jpg" alt="profile" class="profile" />
  <div class="mx-5 ok">
    <p>${c.name}</p>
    <div style="font-size: 0.8rem" class="ok">
      <div class="row mt-2">
        <div class="col-3">Qualifications :</div>
        <div class="col">${c.qual}</div>
      </div>
      <div class="row">
        <div class="col-3">Experience :</div>
        <div class="col">${c.exp} yrs</div>
      </div>
      <div class="row">
        <div class="col-3">Role :</div>
        <div class="col">${c.role}</div>
      </div>
      <div class="row mb-2">
        <div class="col-3">Location :</div>
        <div class="col">${c.loc}</div>
      </div>
      <a href="https://drive.google.com/file/d/1SxV1INpotmLCUKLI5n4XSKKBxyWAJUkv/view?usp=sharing" class="btn p-1 resume">Resume</a>
    </div>
  </div>
</div>`;
    }
  });

  if (candidatesHTML) {
    document.getElementById("candidatesList").innerHTML = candidatesHTML;
  } else {
    document.getElementById(
      "candidatesList"
    ).innerHTML = `<p class="empty my-2">No Candidates Found<p>`;
  }
}

function display(array) {
  var candidatesHTML = ``;

  array.forEach(function (c, index, array) {
    candidatesHTML += `<div class="candidate p-3 m-1">
      <img src="./assets/${c.pic}.jpg" alt="profile" class="profile" />
      <div class="mx-5 ok1">
        <p>${c.name}</p>
        <div style="font-size: 0.8rem" class="ok">
          <div class="row mt-2">
            <div class="col-5">Qualifications :</div>
            <div class="col">${c.qual}</div>
          </div>
          <div class="row">
            <div class="col-5">Experience :</div>
            <div class="col">${c.exp} yrs</div>
          </div>
          <div class="row">
            <div class="col-5">Role :</div>
            <div class="col">${c.role}</div>
          </div>
          <div class="row mb-2">
            <div class="col-5">Location :</div>
            <div class="col">${c.loc}</div>
          </div>
          <a
            href="https://drive.google.com/file/d/1SxV1INpotmLCUKLI5n4XSKKBxyWAJUkv/view?usp=sharing"
            class="btn p-1 resume"
            >Resume</a
          >
        </div>
      </div>
      <div class="eval">
        <p>Evaluation</p>
        <label for="tech${c.id}">Technical Skills: </label>
        <input type="range" id="tech${c.id}" name="vol" min="1" max="5" value="${c.tech}"/>
        <label for="comm${c.id}">Communication skills:</label>
        <input type="range" id="comm${c.id}" name="vol" min="1" max="5"  value="${c.comm}"/>
      </div>
    </div>`;
  });
  if (candidatesHTML) {
    document.getElementById("selectedList").innerHTML = candidatesHTML;
  } else {
    document.getElementById(
      "selectedList"
    ).innerHTML = `<p class="empty my-2">No Candidates Found<p>`;
  }
}

var selected = [];
function select() {
  document.getElementById("candidates").style.display = "none";
  document.getElementById("selected").style.display = "block";

  const loc = document.getElementById("location").value;
  const role = document.getElementById("role").value;

  candidates.forEach(function (c, index, array) {
    if (
      (loc != "" && role != "" && loc == c.loc && role == c.role) ||
      (loc != "" && role === "" && loc == c.loc) ||
      (role != "" && loc === "" && role == c.role) ||
      (loc === "" && role === "")
    ) {
      selected.push(c);
    }
  });
  display(selected);
}

function backHandler() {
  document.getElementById("candidates").style.display = "block";
  document.getElementById("selected").style.display = "none";
}

function sortHandler() {
  selected.forEach(function (c, i, a) {
    const tech = Number(document.getElementById(`tech${c.id}`).value);
    const comm = Number(document.getElementById(`comm${c.id}`).value);

    c.tech = tech;
    c.comm = comm;
    c.eval = tech + comm;
  });

  selected.sort((a, b) => b.eval - a.eval);
  display(selected);
}
