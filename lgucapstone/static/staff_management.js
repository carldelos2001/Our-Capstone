// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const database = firebase.database();

// Add or Update Account
document.getElementById('accountForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const accountType = document.getElementById('accountType').value;
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const newAccountRef = database.ref('accounts').push();
    newAccountRef.set({
        accountType: accountType,
        name: name,
        email: email,
        password: password
    }).then(() => {
        alert("Account successfully created");
        document.getElementById('accountForm').reset();
        $('#addAccountModal').modal('hide');
        loadAccounts();
    });
});

// Load Account List
function loadAccounts() {
    const accountList = document.getElementById('accountList');
    accountList.innerHTML = '';
    
    database.ref('accounts').on('value', function(snapshot) {
        snapshot.forEach(function(childSnapshot) {
            const accountData = childSnapshot.val();
            const row = `
                <tr>
                    <td>${accountData.accountType}</td>
                    <td>${accountData.name}</td>
                    <td>${accountData.email}</td>
                    <td>
                        <button class="btn btn-warning" onclick="editAccount('${childSnapshot.key}')">Edit</button>
                        <button class="btn btn-danger" onclick="deleteAccount('${childSnapshot.key}')">Delete</button>
                    </td>
                </tr>
            `;
            accountList.innerHTML += row;
        });
    });
}

// Edit Account
function editAccount(accountId) {
    database.ref('accounts/' + accountId).once('value', function(snapshot) {
        const accountData = snapshot.val();
        document.getElementById('accountType').value = accountData.accountType;
        document.getElementById('name').value = accountData.name;
        document.getElementById('email').value = accountData.email;
        document.getElementById('password').value = accountData.password;
        $('#addAccountModal').modal('show');
    });
}

// Delete Account
function deleteAccount(accountId) {
    if (confirm("Are you sure you want to delete this account?")) {
        database.ref('accounts/' + accountId).remove();
        loadAccounts();
    }
}

// Search Accounts
function searchAccounts() {
    const searchInput = document.getElementById('searchInput').value.toLowerCase();
    const accountList = document.getElementById('accountList').getElementsByTagName('tr');
    Array.from(accountList).forEach(row => {
        const name = row.cells[1].textContent.toLowerCase();
        if (name.includes(searchInput)) {
            row.style.display = '';
        } else {
            row.style.display = 'none';
        }
    });
}

// Load accounts on page load
window.onload = loadAccounts;
