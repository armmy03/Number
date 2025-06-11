// ข้อมูลเบอร์โทรศัพท์ของแต่ละแผนกของคุณ
// คุณสามารถเพิ่มข้อมูลแผนกอื่นๆ ได้ที่นี่
const departmentContacts = [
    { department: "เวชระเบียน 100 ปี", tel: "1066" },
    { department: "ศูนย์เปล100ปี er", tel: "1129" },
    { department: "จ่ายยาผู้ป่วยใน #50", tel: "1012" },
    { department: "จ่ายยานอกเวลา เบอร์ 7", tel: "1072" },
    { department: "การเงินผู้ป่วยนอก เบอร์ 6", tel: "1017" },
    { department: "ศูนย์สั่งการอุบัติเหตุ (EMS)", tel: "1067" },
    { department: "ประชาสัมพันธ์", tel: "0" },
    { department: "ER", tel: "1074 / 1108 / 1058" }, // ตัวอย่าง: เพิ่มแผนกอื่นๆ
    { department: "คิดเงินผู้ป่วยใน #51", tel: "1102" },
    { department: "ศูนย์จำหน่ายผู้ป่วย # 52", tel: "1084" },
    { department: "ศูนย์ X-Ray Computer (CT สแกน)", tel: "1075" },
    { department: "ห้อง X-Ray/หัวหน้า", tel: "1070 / 2005" },
    { department: "ห้องทำแผล", tel: "1071" },
    { department: "ห้องพักเวร X-Ray", tel: "1069 / 2006" },
    { department: "ชั้น G คลังยา", tel: "1118" },
    { department: "ห้องหัวหน้างานอุบัติเหตุ(พี่เต้ย)", tel: "1073" },
    { department: "ชั้น 1 จุดซักประวัติ ER", tel: "1086" },
    { department: "ชั้น 1 ศูนย์ Refer", tel: "1176" },
    { department: "ชั้น 6 ห้องส่องกล้องลำไส้", tel: "1176" },
    { department: "ชั้น 2 ห้องผ่าตัด", tel: "1126 / 1127" },
    { department: "ชั้น 2 วิสัญญี", tel: "1128 / 1183" },
    { department: "ห้องผ่าตัด1", tel: "2011" },
    { department: "ห้องผ่าตัด2", tel: "2012" },
    { department: "ห้องผ่าตัด3", tel: "2013" },
    { department: "ห้องผ่าตัด4", tel: "2014" },
    { department: "ห้องผ่าตัด5", tel: "2015" },
    { department: "ห้องผ่าตัด6", tel: "2016" },
    { department: "ห้องผ่าตัด7", tel: "2017" },
    { department: "ห้องผ่าตัด8", tel: "2018" },
    { department: "ชั้น 2 ห้องพักเวรพยาบาลผ่าตัด/วิสัญญี", tel: "1226" },
    { department: "OR ซับพลาย", tel: "2010" },
    { department: "OR ตา", tel: "1103" },
    { department: "ชั้น 3 หอผู้ป่วย NICU", tel: "1063 / 2008" },
    { department: "ชั้น 3 หอผุ้ป่วย MICU", tel: "1135 / 1136" },
    { department: "ชั้น 3 หอผู้ป่วย SICU ", tel: "1047 / 2007" },
    { department: "หอผู้ป่วยศัลยกรรมชาย", tel: "1091/2019" },
    { department: "หอผู้ป่วยศัลยกรรมหญิง", tel: "1094/2020" },
    { department: "หอผู้ป่วย ICU ชั้น 5", tel: "1096" },
    { department: "หอผู้ป่วยศัลยกรรมกระดูก", tel: "1107" },
    { department: "หอผู้ป่วยพิเศษ ชั้น 6", tel: "1020/2021" },
    { department: "หอผู้ป่วยพิเศษ ชั้น 7", tel: "1069/2022" },
    { department: "ชั้น 7 ห้องประชุมพระราม 9 (ห้องให้คีโม) ชั้น 7", tel: "1172" },
    { department: "MRI", tel: "1188 (091-4210258)" },
    { department: "ศูนย์สลายนิ่ว", tel: "1184" },
    { department: "ศูนย์ซ่อมอุปกรณ์การแพทย์ (จ่ายกลาง)", tel: "1159" },
    { department: "ห้องปราศจากเชื้อ (พี่ไผ่คลังผลิต)", tel: "1116" },
        { department: "ชั้น 1  เวชระเบียนผู้ป่วยนอก", tel: "1048 / 1002" },
    { department: "ชั้น 1 ศูนย์เปล", tel: "1144" },
    { department: "ห้องหัวหน้า OPD (พี่น้อย)", tel: "1005" },
    { department: "OPD ห้องจ่ายยาผู้ป่วยนอก", tel: "1014 / 1121" },
    { department: "OPD ห้องคิดเงินผู้ป่วยนอก", tel: "1018" },
    { department: "ห้อง LAB OPD (ชั้น 1)", tel: "1021" },
    { department: "OPD ห้องฉีดยา", tel: "1026" },
    { department: "OPD กายภาพบำบัด", tel: "1149 / 1158" }, 
    { department: "OPD กิจกรรมบำบัด", tel: "1148" },
    { department: "OPD เวชระเบียนผู้ป่วยใน", tel: "1033" },
    { department: "จองห้องพิเศษ (8.00-12.00)", tel: "1120" }, 
    { department: "OPD ศูนย์ Admit นอน รพ.", tel: "1120" }, 
    { department: "ศูนย์วัสดุการแพทย์ # 15", tel: "1114" }, 
    { department: "OPD ห้องทำงานเภสัช", tel: "1115" },
    { department: "OPD ห้องตรวจสอบสิทธิ #5", tel: "1061 / 1062" },
    { department: "OPD ห้องเภสัชกรรม (คุณสิทธิ)", tel: "1119" },
    { department: "OPD คลินิกอายุรกรรม", tel: "1034 / 1035" },
    { department: "OPD ห้องจ่ายยาผู้ป่วยนอก ชั้น 2", tel: "1117" },
    { department: "OPD ห้องการเงินผู้ป่วยนอก ชั้น 2", tel: "1113" },
    { department: "OPD คลินิกศัลยกรรมกระดูก", tel: "1011" },
    { department: "OPD คลินิกนรีเวชกรรม / ANC", tel: "1022 / 1024" },
    { department: "OPD คลินิกศัลยกรรม # 8", tel: "1132 / 1006" },
    { department: "OPD คลินิกศัลยกรรมทางเดินปัสสาวะ", tel: "1132 / 1006" }, 
    { department: "OPD คลินิกเวชศาสตร์ฟื้นฟู # 9", tel: "1008" },
    { department: "OPD คลินิกกัญชา+คลินิกประคับประคอง", tel: "1016" },
    { department: "OPD ศูนย์คลินิกนอกเวลา SMC (พี่มิ้ม)", tel: "1161" },
    { department: "OPD จุดคัดกรอง OPD", tel: "1173" },
    { department: "OPD ห้องดีแพค", tel: "1150" },
    { department: "OPD ห้องหัวหน้า OPD ตา", tel: "1009" },
    { department: "OPD ห้องตรวจตา", tel: "1010" },
    { department: "OPD จิตเวช", tel: "1027 / 1015" },
    { department: "OPD คลินิกหูคอจมูก ENT", tel: "1036" },
    { department: "OPD คลินิกกุมารเวช", tel: "1130" },
    { department: "OPD งานอาชีวเวชกรรม", tel: "1087" },
    { department: "OPD ห้องพี่ยุ้ย ออร์ดิจชาร์ต", tel: "1155" },
    { department: "OPD งานทันตกรรม", tel: "1028 / 1029 / 1030" },
    { department: "OPD งานเคมีวิทยา", tel: "1080" },
    { department: "OPD งานโลหิตวิทยา (LAB)", tel: "1079" },
    { department: "OPD งานจุลชีววิทยา (แบคทีเรีย)", tel: "1081" },
    { department: "OPD ธนาคารเลือด", tel: "1082" },
    { department: "OPD งานภูมิคุ้มกัน", tel: "1083" },
    { department: "OPD เซลล์วิทยา (ส่งชิ้นเนื้อ)", tel: "1171" },
    { department: "OPD องค์กรแพทย์ (ห้องพักแพทย์)", tel: "1077 / 1078" }, // รวม 2 เบอร์เข้าด้วยกัน
    { department: "OPD ห้องรอง ผอ.ฝ่ายการแพทย์", tel: "2001" },
    { department: "OPD ห้องรอง ผอ.ฝ่ายบริหาร", tel: "2002" },
    { department: "OPD กลุ่มงานบริหารทั่วไป", tel: "1043" },
    { department: "OPD หน้าห้องท่านผู้อำนวยการ", tel: "2000" },
    { department: "OPD งานธุรการ", tel: "1045" },
    { department: "OPD การเงิน", tel: "1044 / 1143" },
    { department: "OPD ฝ่ายการเจ้าหน้าที่", tel: "1040" },
    { department: "OPD กลุ่มงานพัสดุ", tel: "1046" },
    { department: "OPD ศูนย์คุณภาพ (HA)", tel: "1056" },
    { department: "OPD ศูนย์ข้อมูล", tel: "1187" },
    { department: "OPD ห้องนิติกร", tel: "1064" },
    { department: "ศูนย์ประสานงาน (ศูนย์เยี่ยมบ้าน)", tel: "1065 / 1053" },
    { department: "ห้องนวดแผนไทย", tel: "1085" },
    { department: "คลินิก TB / ARI", tel: "1100 / 1101" },
    { department: "ห้องสังคมสงเคราะห์", tel: "1031" },
    { department: "ห้องคลอด", tel: "1104" },
    { department: "ห้องอบอุณหภูมิเด็ก", tel: "1105" },
    { department: "ชั้น 2 หอผู้ป่วยจิตเวช", tel: "1095" },
    { department: "ชั้น 2 หอผู้ป่วยสูติ-นรีเวชกรรม", tel: "1106" },
    { department: "งาน IC", tel: "1112" },
    { department: "ชั้น 3 หอผู้ป่วยอายุรกรรมชาย", tel: "1093 / 1097" },
    { department: "ชั้น 4 หอผู้ป่วยกุมารเวชกรรม", tel: "1109 / 1110" },
       { department: "ห้องจ่ายเวชภัณฑ์", tel: "1098" },
    { department: "ชั้น 2หอผู้ป่วยอายุรกรรมหญิง", tel: "1092 / 1089" },
    { department: "ชั้น 4หอผู้ป่วยตา หู คอ จมูก", tel: "1111" },
    { department: "ห้องมูลนิธิ (พี่มิ้ม)", tel: "1138" },
    { department: "หอผู้ป่วยสุขใจ", tel: "1090" },
    { department: "OPD หัวหน้ากลุ่มการพยาบาล", tel: "1125" },
    { department: "OPD ห้องกลุ่มการพยาบาล", tel: "1050 / 1054" },
    { department: "กลุ่มงานประกันสุขภาพ", tel: "1088" },
    { department: "OPD บัญชี", tel: "1145" },
    { department: "OPD ห้องโสตทัศนูปกรณ์", tel: "1055" },
    { department: "OPD ศูนย์คอมพิวเตอร์", tel: "1037 / 1170" },
    { department: "OPD กลุ่มงานวิชาการ", tel: "1052" },
    { department: "OPDห้องหมอธนันชัย", tel: "1060" },
        { department: "ห้องสมุด(ศูนย์แพทย์)", tel: "3000 ต่อ 1034" }, 
    { department: "ศูนย์แพทย์", tel: "3000" },
    { department: "กลุ่มงานเวชกรรมสังคม", tel: "1051 / 1245" },
    { department: "คลังพัสดุ (พี่ภา)", tel: "1142" },
    { department: "หัวหน้าโภชนาการ", tel: "1146" },
    { department: "โรงครัว", tel: "1147" },
    { department: "งานซักฟอก / หัวหน้า", tel: "1023 / 2004" },
    { department: "งานนิติเวช", tel: "1179" },
    { department: "ห้องนึ่งของ", tel: "1139" },
    { department: "งานศูนย์จ่ายกลาง", tel: "1140 / 2009" },
    { department: "โลจิสติกส์ (พี่ปุ้ม)", tel: "1166" },
    { department: "โรงพักศพ", tel: "1151" },
    { department: "งานซ่อมบำรุง (พี่โอ๊ต) / บำบัดน้ำเสีย", tel: "1152" },
    { department: "งานอาคารสถานที่", tel: "1153" },
    { department: "โรงรถ", tel: "1154" },
    { department: "โรงพักขยะ", tel: "1182" },
    { department: "ห้องตรวจสุขภาพต่างด้าว", tel: "1003" },
    { department: "กายอุปกรณ์ (พี่จ่อน)", tel: "1181" },
    { department: "อุปกรณ์การแพทย์ (ศูนย์เวน)", tel: "1163" },
    { department: "ชั้น 2 ตึกเขียวห้อง Eco หัวใจ", tel: "1059" },
    { department: "ตึกเขียวไตเทียม", tel: "1134 / 1032" },
    { department: "ไตเทียมเอกชน", tel: "1038" },
    { department: "ห้องล้างไตหน้าท้อง", tel: "1041" },
    { department: "ชั้น 2 ตึกเขียวห้องพิเศษอายุรกรรม ", tel: "1049" },
    { department: "ชั้น 2 ตึกเขียวห้องพิเศษอายุรกรรม ", tel: "-" },
        { department: "ชั้น 4 ตึกเขียวห้องพิเศษอายุรกรรม ", tel: "1099" },
    { department: "ชั้น 6 ตึกเขียวหอผู้ป่วย พระสงฆ์ ", tel: "1004" }
    // *** สำคัญ: เพิ่มข้อมูลเบอร์ทุกแผนกของคุณที่นี่ ***
    // รูปแบบ: { department: "ชื่อแผนก", tel: "เบอร์โทรศัพท์" },
];

// รับ Element ของช่องค้นหา ปุ่ม และส่วนแสดงผล
const searchInput = document.getElementById('searchInput');
const searchButton = document.getElementById('searchButton');
const searchResultsDiv = document.getElementById('searchResults');

// ฟังก์ชันสำหรับทำการค้นหา
function performSearch() {
    const searchTerm = searchInput.value.toLowerCase(); // แปลงคำค้นหาเป็นตัวพิมพ์เล็กทั้งหมด
    const filteredResults = departmentContacts.filter(contact => {
        // ตรวจสอบว่าชื่อแผนกหรือเบอร์โทรศัพท์มีคำค้นหาอยู่หรือไม่
        return contact.department.toLowerCase().includes(searchTerm) ||
               contact.tel.includes(searchTerm);
    });

    displayResults(filteredResults);
}

// ฟังก์ชันสำหรับแสดงผลลัพธ์
function displayResults(results) {
    searchResultsDiv.innerHTML = ''; // ล้างผลลัพธ์เก่า

    if (results.length === 0) {
        searchResultsDiv.innerHTML = '<p class="no-results">ไม่พบข้อมูลที่ค้นหา</p>';
        return;
    }

    results.forEach(contact => {
        const div = document.createElement('div');
        div.classList.add('department-item');
        div.innerHTML = `
            <span class="department-name">${contact.department}</span>
            <span class="department-tel">${contact.tel}</span>
        `;
        searchResultsDiv.appendChild(div);
    });
}

// เพิ่ม Event Listener สำหรับปุ่มค้นหา
searchButton.addEventListener('click', performSearch);

// เพิ่ม Event Listener สำหรับการกด Enter ในช่องค้นหา
searchInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        performSearch();
    }
});

// แสดงผลลัพธ์เริ่มต้นทั้งหมดเมื่อโหลดหน้าเว็บ
// หรือจะแสดงข้อความให้พิมพ์ค้นหาก่อนก็ได้
// displayResults(departmentContacts); // ถ้าต้องการแสดงทั้งหมดตั้งแต่แรก