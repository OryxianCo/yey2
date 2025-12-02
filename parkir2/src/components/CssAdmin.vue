<template>
    <div style="display:none;"></div>
</template>

<style>
* {
    box-sizing: border-box;
}

body, html {
    margin: 0;
    padding: 0;
    width: 100%;
    overflow-x: hidden; 
}

.admin-wrapper,
.admin-container {
    max-width: 100%;
    overflow-x: hidden;
}

.admin-wrapper {
    width: 100%;
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    font-family: 'Poppins', sans-serif;
}

.top-card {
    background: linear-gradient(90deg, #d70d36, #7a1035);
    color: white;
    border-radius: 0px;
    padding: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.top-card .left, .top-card .right {
    width: 45%;
}

.top-card .label {font-size: 12px; opacity: .8;}
.top-card .value {font-size: 16px; margin-top: 5px;}
.top-card .number {font-size: 28px; margin-top: 5px; font-weight: 700;}

.divider {
    width: 1px;
    height: 80px;
    background: rgba(255,255,255,0.4);
}

.report-box {
    background: white;
    padding: 20px;
    border-radius: 12px;
    box-shadow: 0 4px 10px rgba(0,0,0,0.1);
}

.report-box h3 {margin: 0; font-size: 18px;}
.report-box .desc {font-size: 13px; margin: 5px 0 20px; opacity: .7;}

.form-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 15px;
    margin-bottom: 20px;
}

.form-grid input,
.form-grid select {
    width: 100%;
    padding: 10px;
    border-radius: 8px;
    border: 1px solid #ccc;
    font-size: 14px;
}

.lihat {
    width: 100%;
    padding: 10px;
    border: none;
    background: #2f113c;
    color: white;
    border-radius: 8px;
    font-size: 15px;
    cursor: pointer;
}

.history-box {
    background: white;
    padding: 20px;
    border-radius: 12px;
    box-shadow: 0 4px 10px rgba(0,0,0,0.1);
}

.history-box .sub {
    font-size: 13px;
    opacity: .7;
    margin-bottom: 15px;
}

.history-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 12px 0;
    border-bottom: 1px solid #eee;
}

.history-item:last-child {border-bottom: none;}

.arrow {
    font-size: 22px;
    color: #c20000;
    margin-right: 10px;
}

.left-side {
    display: flex;
    align-items: center;
}

.info .title {font-size: 15px;}
.info .time {font-size: 12px; opacity: .6;}

.price {
    font-size: 16px;
    font-weight: 600;
    color: #c20000;
}

.admin-container {
    width: 100%;
    background: #fff;
    padding: 20px;
    border-radius: 0px;
    margin-top: 25px;
    box-shadow: 0 2px 10px rgba(0,0,0,0.1);
    font-family: "KoHo", sans-serif;
}

.operator-section {
    background: #C31432;
    color: white;
}

.operator-section h2 {
    font-size: 22px;
    font-weight: bold;
    margin-bottom: 15px;
}

.operator-list {
    list-style: none;
    padding: 0;
}

.operator-list li {
    display: flex;
    justify-content: space-between;
    padding: 8px 0;
    font-size: 15px;
}

.operator-list .actions a {
    margin-left: 10px;
    color: white;
    text-decoration: none;
    font-weight: 500;
}

.tarif-section h2 {
    margin-bottom: 15px;
}

.tarif-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 0;
}

.tarif-item input {
    background: #fff;
    border: 1px solid #ddd;
    padding: 8px;
    margin-right: 10px;
    border-radius: 5px;
    font-family: "KoHo", sans-serif;
}

.tarif-item .left {
    display: flex;
}

.tarif-item .actions a {
    margin-left: 10px;
    color: #000;
    text-decoration: none;
}

.akun-section {
    background: #240B36;
    color: white;
}

.akun-section h2 {
    margin-bottom: 15px;
}

.akun-detail label {
    font-size: 13px;
    opacity: 0.8;
}

.akun-detail p {
    margin: 5px 0 12px;
    font-size: 16px;
}

.keluar-btn {
    width: 100%;
    padding: 12px;
    background: white;
    border: none;
    border-radius: 8px;
    font-family: "KoHo", sans-serif;
    font-weight: bold;
}
</style>
