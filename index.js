// Import stylesheets
import "./style.css";

// Part 1 – HTML/CSS
const appDiv1 = document.getElementById("part1-app");
appDiv1.innerHTML = `<div class="container">
    <div class="heading">
      <div class="heading-row">
        <div class="heading-col-1">Account</div>
        <div class="heading-col-2">
          <div>^  Available Cash</div>
          <div>Today's Change</div>
        </div>
      </div>
    </div>

    <div class="section">
      <div class="content">
        <div class="content-row">
          <div class="content-col-1">IRA - 5200</div>
          <div class="content-col-2">
            <div class="cost">$5,763.36</div>
            <div class="dec-percent">-0.08% / $8,916.69</div>
          </div>
        </div>
        <div class="content-row">
          <span class="content-col-1">AAA - 1812</span>
          <span class="content-col-2">
                        <div class="cost">$2,010,926.10</div>
                        <div class="inc-percent">+0.21% / $38,881.63</div> 
                    </span>
        </div>
        <div class="content-row">
          <span class="content-col-1">IRA - 5200</span>
          <span class="content-col-2">
                        <div class="cost">$10,050,054.07</div>
                        <div class="inc-percent">+0.07% / $8,916.69</div>
                    </span>
        </div>

      </div>
      <div class="loadMore">Load more</div>
    </div>

  </div>`;

//---------------------------------

const acctData = [
  {
    acctNum: "AAA - 1234",
    user: "Alice"
  },
  {
    acctNum: "AAA - 5231",
    user: "Bob"
  },
  {
    acctNum: "AAA - 9921",
    user: "Alice"
  },
  {
    acctNum: "AAA - 8191",
    user: "Alice"
  }
];
const balance = {
  "AAA - 1234": 4593.22,
  "AAA - 9921": 0,
  "AAA - 5231": 232142.5,
  "AAA - 8191": 4344
};

const getAccNum = (filterByUser, sortByAccORBal, sortByBal = "asc") => {
  return acctData
    .filter(acc => {
      acc.balance = balance[acc.acctNum];
      return acc.user === filterByUser || filterByUser === "";
    })
    .sort((a, b) => {
      if (sortByAccORBal === "acctNum") {
        return a.acctNum.localeCompare(b.acctNum);
      }
      if (sortByAccORBal === "balance" || sortByBal === "asc") {
        return a.balance - b.balance;
      }
      if (sortByBal === "desc") {
        return b.balance - a.balance;
      }
    })
    .map(accNo => {
      return accNo.acctNum;
    });
};

//a) filtered by Bob
console.log(getAccNum("Bob"));
//b) filtered by Charlie
console.log(getAccNum("Charlie"));
//c)sorted by acctNum
console.log(getAccNum("", "acctNum"));
//d) filtered by Alice; sorted by balance ascending
console.log(getAccNum("Alice", "", "asc"));

const appDiv2 = document.getElementById("part2-app");
appDiv2.innerHTML = `a) filtered by Bob<br>
${getAccNum("Bob")}<br>
b) filtered by Charlie<br>
${getAccNum("Charlie")}<br>
c)sorted by acctNum<br>
${getAccNum("", "acctNum")}<br>
d) filtered by Alice; sorted by balance ascending<br>
${getAccNum("Alice", "", "asc")}<br>
`;
