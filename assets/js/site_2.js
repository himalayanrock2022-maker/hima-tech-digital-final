
document.addEventListener('DOMContentLoaded',()=>{
  const w=document.getElementById('welcomePopup');
  if(w && !sessionStorage.getItem('wel')){
    setTimeout(()=>{w.style.display='grid';document.body.style.overflow='hidden'},2200);
    sessionStorage.setItem('wel','1');
  }
  const toggle=document.getElementById('mobileToggle');
  const nav=document.getElementById('navLinks');
  if(toggle && nav){
    toggle.addEventListener('click',()=>{
      const isFlex = nav.style.display==='flex';
      nav.style.display = isFlex ? 'none':'flex';
      if(!isFlex){
        nav.style.position='absolute'; nav.style.top='74px'; nav.style.left='0'; nav.style.right='0'; nav.style.background='rgba(16,16,21,.98)'; nav.style.flexDirection='column'; nav.style.padding='22px'; nav.style.borderBottom='1px solid #2A2A36'; nav.style.boxShadow='0 20px 60px rgba(0,0,0,.4)';
      }
    });
  }
  // audit form
  const auditForm=document.getElementById('auditForm');
  if(auditForm){
    auditForm.addEventListener('submit',(e)=>{
      e.preventDefault();
      const btn=e.target.querySelector('button');
      const orig=btn.textContent;
      btn.textContent='Scanning...';
      btn.disabled=true;
      let progress=0;
      const progBar=document.getElementById('auditProgress');
      if(progBar) progBar.style.display='block';
      const interval=setInterval(()=>{
        progress+=8;
        if(progBar){
          progBar.querySelector('div').style.width=progress+'%';
          progBar.querySelector('span').textContent=progress+'%';
        }
        if(progress>=100){
          clearInterval(interval);
          document.getElementById('auditResult').style.display='block';
          document.getElementById('auditResult').innerHTML=`<div style='padding:18px;background:#1C1C24;border-radius:14px;border:1px solid #D62E5E'><h4 style='color:#FFD76B;font-family:Space Grotesk'>✅ Audit Complete!</h4><p style='color:#A8A8B8;font-size:13px;margin-top:8px;line-height:1.5'>Website: <b>${document.getElementById('auditPhone')?.value || document.getElementById('auditUrl')?.value || 'your site'}</b><br>Score: <b style='color:#FF3B6E'>68/100</b> - 14 issues found<br>Our team will email full report to <b>${document.getElementById('auditEmail')?.value || 'you'}</b> within 15 mins.</p><a href='contact.html' style='display:inline-block;margin-top:12px;background:linear-gradient(135deg,#D62E5E,#FF3B6E);color:#fff;padding:10px 18px;border-radius:10px;font-size:13px;font-weight:700;text-decoration:none'>Fix My Issues →</a></div>`;
          btn.textContent='✅ Audit Ready';
          btn.disabled=false;
          if(progBar) setTimeout(()=>progBar.style.display='none',2000);
        }
      },120);
    });
  }
  // Hifaz widget
  window.toggleHifaz = function(){
    const panel=document.getElementById('hifazPanel');
    const bubble=document.getElementById('hifazBubble');
    if(panel.classList.contains('open')){
      panel.classList.remove('open');
      bubble.style.display='grid';
    }else{
      panel.classList.add('open');
      bubble.style.display='none';
    }
  }
  window.minimizeHifaz = function(){
    const panel=document.getElementById('hifazPanel');
    const minimized=document.getElementById('hifazMinimized');
    panel.classList.remove('open');
    minimized.classList.add('show');
  }
  window.restoreHifaz = function(){
    const panel=document.getElementById('hifazPanel');
    const minimized=document.getElementById('hifazMinimized');
    minimized.classList.remove('show');
    panel.classList.add('open');
  }
  window.closeHifaz = function(){
    const panel=document.getElementById('hifazPanel');
    const bubble=document.getElementById('hifazBubble');
    const minimized=document.getElementById('hifazMinimized');
    panel.classList.remove('open');
    minimized.classList.remove('show');
    bubble.style.display='grid';
    sessionStorage.setItem('hifazClosed','1');
  }
  window.sendHifaz = function(){
    const input=document.getElementById('hifazInput');
    const body=document.getElementById('hifazBody');
    if(!input.value.trim()) return;
    const userMsg=document.createElement('div');
    userMsg.style.cssText='background:linear-gradient(135deg,#D62E5E,#FF3B6E);border-radius:14px 4px 14px 14px;padding:10px 14px;margin-bottom:10px;margin-left:auto;max-width:80%;color:#fff;font-size:13px';
    userMsg.textContent=input.value;
    body.appendChild(userMsg);
    const typing=document.createElement('div');
    typing.id='hifazTyping';
    typing.innerHTML='<div class="hifaz-msg"><p>Typing...</p></div>';
    body.appendChild(typing);
    body.scrollTop=body.scrollHeight;
    const text=input.value;
    input.value='';
    setTimeout(()=>{
      const t=document.getElementById('hifazTyping');
      if(t) t.remove();
      const reply=document.createElement('div');
      reply.className='hifaz-msg';
      reply.innerHTML=`<p>Thanks for your message! Hifaz will reply within 5 mins. For quick response, WhatsApp us or email himatech.ithub@gmail.com</p><div class='hifaz-msg-time'>Just now</div>`;
      body.appendChild(reply);
      body.scrollTop=body.scrollHeight;
    },1200);
  }
});

function closePopup(id){document.getElementById(id).style.display='none';document.body.style.overflow='';}
function openAudit(){document.getElementById('auditPopup').style.display='grid';document.body.style.overflow='hidden';}
