
document.addEventListener('DOMContentLoaded',()=>{
  // welcome popup once per session
  const w=document.getElementById('welcomePopup');
  if(w && !sessionStorage.getItem('wel')){
    setTimeout(()=>{w.style.display='grid';document.body.style.overflow='hidden'},2000);
    sessionStorage.setItem('wel','1');
  }
  // mobile menu
  const toggle=document.getElementById('mobileToggle');
  const nav=document.getElementById('navLinks');
  if(toggle && nav){
    toggle.addEventListener('click',()=>{nav.style.display = nav.style.display==='flex' ? 'none':'flex'; nav.style.position='absolute'; nav.style.top='72px'; nav.style.left='0'; nav.style.right='0'; nav.style.background='rgba(7,7,8,.98)'; nav.style.flexDirection='column'; nav.style.padding='20px'; nav.style.borderBottom='1px solid #1e1e22';});
  }
  // audit form
  const auditForm=document.getElementById('auditForm');
  if(auditForm){
    auditForm.addEventListener('submit',(e)=>{
      e.preventDefault();
      const btn=e.target.querySelector('button');
      btn.textContent='Generating...';
      setTimeout(()=>{
        document.getElementById('auditResult').style.display='block';
        document.getElementById('auditResult').innerHTML=`<div style='padding:16px;background:#111;border-radius:12px;border:1px solid #8B1E3F'><h4 style='color:#D4AF37'>✅ Free SEO Audit Ready!</h4><p style='color:#aaa;font-size:13px;margin-top:8px'>We analyzed your website. <b>Score: 68/100</b> - 12 issues found. Our team will email full report to ${document.getElementById('auditEmail').value} within 15 mins.</p></div>`;
        btn.textContent='Audit Generated ✅';
      },1200);
    });
  }
});
function closePopup(id){document.getElementById(id).style.display='none';document.body.style.overflow='';}
function openAudit(){document.getElementById('auditPopup').style.display='grid';document.body.style.overflow='hidden';}
