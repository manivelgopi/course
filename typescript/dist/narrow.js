"use strict";
function isAdminAccount(account) {
    if ("isAdmin" in account) {
        return account.isAdmin;
    }
    return false;
}
//# sourceMappingURL=narrow.js.map