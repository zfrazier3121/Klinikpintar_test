Feature('Klinik Pintar Site Test');

Scenario('1. Verify Homepage',  ({ I }) => {
    I.amOnPage('/');
    I.see("Menghubungkan kesehatan Indonesia melalui jaringan klinik terstandarisasi");
});

Scenario('2. Navigate Patient Page',  ({ I }) => {
    I.amOnPage('/');
    I.click("//span[contains(text(),'Lihat layanan pasien kami')]");
    I.wait(3);
});

Scenario('3. Submit Form with Invalid Credentials (invalid phone number)',  ({ I }) => {
    I.amOnPage("https://pasien.klinikpintar.id/clinic/5e223a63be12b1026d1231f8/reservation?service=62e173b6d0e308000946bfef"); 
   
    I.selectOption("Layanan", "Poli Umum - Klinik Permata Bunda"); 
   
    I.fillField("#name", "Joe Blow");
   
    I.click("//body/div[@id='__nuxt']/div[@id='__layout']/div[1]/section[1]/div[1]/form[1]/div[5]/div[2]/div[1]/div[1]/div[1]/input[1]");
    I.click("//button[contains(text(),'2023')]");
    I.click("//body/div[2]/div[1]/div[1]/div[1]/div[1]/button[1]/i[1]");
    I.click("//body/div[2]/div[1]/div[1]/div[1]/div[1]/button[1]/i[1]");
    I.click("//body/div[2]/div[1]/div[1]/div[1]/div[1]/button[1]/i[1]");
    I.click("//div[contains(text(),'1997')]");
    I.click("//div[contains(text(),'Sep')]");
    I.click("//tbody/tr[2]/td[7]/div[1]");
   
    I.click("//body/div[@id='__nuxt']/div[@id='__layout']/div[1]/section[1]/div[1]/form[1]/div[5]/div[3]/span[1]/div[1]/div[1]/div[1]/div[1]/div[1]/input[1]");
    I.fillField("//label[contains(text(),'Nomor Telepon')]", "1");		//Invalid phone number								

    I.click("//body/div[@id='__nuxt']/div[@id='__layout']/div[1]/section[1]/div[1]/form[1]/div[7]/span[1]/div[1]/div[1]/div[1]/div[1]/input[1]");
    I.click("//button[contains(text(),'23')]");
    
    I.selectOption("#appointment-time", value="62e178b55255a20008994e50");
	I.wait(5);
	I.click("//body[1]/div[1]/div[1]/div[1]/section[1]/div[1]/form[1]/div[7]/div[2]/div[35]");
	
	I.click("//button[@id='next_inquiry']");
	
	I.wait(5);
	
	I.click("//button[contains(text(),'Submit Layanan')]"); 			//Error message: "Mohon maaf terjadi kesalahan pada sistem. Mohon hubungi"
	
	I.wait(10);
});

