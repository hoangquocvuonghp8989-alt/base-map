document.addEventListener("click", function(e){

  var a = e.target.closest("a");
  if(!a) return;

  if(a.href.includes("buymeacoffee.com")){

    e.preventDefault();
    e.stopPropagation();

    if(typeof BASE_MAP === "undefined"){
      alert("⚠️ Đang tải dữ liệu, thử lại sau!");
      return;
    }

    var match = a.href.match(/e\/(\d+)/);
    var id = match ? match[1] : null;

    if(!id){
      alert("❌ Không đọc được ID");
      return;
    }

    var realLink = BASE_MAP[id];

    if(realLink){
      window.open(realLink, "_blank");
    }else{
      alert("⚠️ Base đang cập nhật, thử lại sau!");
    }

  }

}, true);
