program transaksi_penjualan_barang;

var

   Harga_1_Kaos, jumlah, total: longint;
   Username : string;
   Jenis_Barang : string;
   diskon,tot_bayar : real;
   
begin

   
   write('Silakan Input Nama Sesuai Username Yang Sudah Memesan : ');
   writeln('1.Alvin Alvian');
   writeln('2.Dwi Purbo');
   writeln('3.Della Andini');
   write('Username : ');read(Username);


   if (Username = 'Alvin Alvian') or (Username = 'alvin alvian') then
        begin
            Jenis_Barang :='Kaos';
            Harga_1_Kaos :=55500;
        end
   else if (Username = 'Dwi Purbo') or (Username = 'dwi purbo') then
        begin
            Jenis_Barang := 'Kaos';
            Harga_1_Kaos := 55500;
        end
   else if (Username = 'Della Andini') or (Username = 'della andini') then
        begin
            Jenis_Barang := 'Kaos';
            Harga_1_Kaos := 55500;
        end
    else
        begin
             writeln('Username Salah');
             exit();
        end;   
        
   writeln('Jenis Barang  : ',Jenis_Barang);
   writeln('Harga 1 Kaos : ',Harga_1_Kaos);
   write('Jumlah Kaos   : ');read(jumlah);
   
   total:=Harga_1_Kaos*jumlah;
   diskon:=0;
   if (total >= 1500000) then
        begin
            diskon:=0.1;
        end;
  tot_bayar:=(total-(total*diskon));
  writeln('Jumlah Harga   : ',total); 
  writeln('Discount    : ',total*diskon:0:0); 
  writeln('Total : ',tot_bayar:0:0); 

end.