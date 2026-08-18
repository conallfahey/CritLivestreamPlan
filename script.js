const slides=[...document.querySelectorAll('.slide')];
const current=document.getElementById('currentSlide');
const total=document.getElementById('totalSlides');
const progress=document.getElementById('progressBar');
const nav=[...document.querySelectorAll('.nav-chip')];
const menu=document.getElementById('slideMenu');
const menuLinks=document.getElementById('menuLinks');
let activeIndex=0;

total.textContent=String(slides.length).padStart(2,'0');
const sections={intro:'Overview',compare:'Compare',budget:'Budget builds',system:'How it works',gear:'Gear detail',decision:'Planning notes'};
Object.entries(sections).forEach(([key,label])=>{
  const group=document.createElement('div'); group.className='menu-group';
  group.innerHTML=`<h4>${label}</h4>`;
  slides.filter(s=>s.dataset.section===key).forEach((slide)=>{
    const index=slides.indexOf(slide); const button=document.createElement('button');
    button.className='menu-link'; button.dataset.index=index;
    button.innerHTML=`<span>${String(index+1).padStart(2,'0')}</span>${slide.dataset.label}`;
    button.onclick=()=>{go(index); closeMenu()}; group.appendChild(button);
  }); menuLinks.appendChild(group);
});

function go(index){activeIndex=Math.max(0,Math.min(slides.length-1,index));slides[activeIndex].scrollIntoView({behavior:'smooth'});}
function update(index){activeIndex=index;current.textContent=String(index+1).padStart(2,'0');progress.style.width=`${((index+1)/slides.length)*100}%`;const section=slides[index].dataset.section;nav.forEach(n=>n.classList.toggle('active',n.dataset.section===section));document.querySelectorAll('.menu-link').forEach(n=>n.classList.toggle('active',+n.dataset.index===index));}
const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)update(slides.indexOf(e.target))}),{threshold:.58});
slides.forEach(s=>observer.observe(s));
nav.forEach(n=>n.onclick=()=>document.getElementById(n.dataset.target).scrollIntoView({behavior:'smooth'}));
document.getElementById('prev').onclick=()=>go(activeIndex-1);document.getElementById('next').onclick=()=>go(activeIndex+1);
document.querySelectorAll('.next-btn').forEach(b=>b.onclick=()=>go(activeIndex+1));
function openMenu(){menu.classList.add('open');document.getElementById('menuToggle').setAttribute('aria-expanded','true')}
function closeMenu(){menu.classList.remove('open');document.getElementById('menuToggle').setAttribute('aria-expanded','false')}
document.getElementById('menuToggle').onclick=openMenu;document.getElementById('menuClose').onclick=closeMenu;
document.querySelectorAll('table tbody tr').forEach(row=>{const cells=[...row.querySelectorAll('td')];const links=cells.at(-1);if(!links?.classList.contains('table-links'))return;const item=cells[0].textContent.trim();const choices=[['Baseline',cells[2]?.textContent.trim()],['Standard',cells[3]?.textContent.trim()],['Redundant',cells[4]?.textContent.trim()]];links.innerHTML=choices.map(([label,choice])=>{const query=encodeURIComponent(`${item} ${choice}`);return `<a style="display:block;margin:2px 0;font-size:9px" href="https://www.bhphotovideo.com/c/search?Ntt=${query}&N=0&InitialSearch=yes&sts=ma" target="_blank" rel="noopener">${label} ↗</a>`}).join('');});
document.addEventListener('keydown',e=>{if((e.metaKey||e.ctrlKey)&&e.key.toLowerCase()==='k'){e.preventDefault();menu.classList.contains('open')?closeMenu():openMenu()}else if(e.key==='ArrowRight'||e.key==='ArrowDown'||e.key==='PageDown')go(activeIndex+1);else if(e.key==='ArrowLeft'||e.key==='ArrowUp'||e.key==='PageUp')go(activeIndex-1);else if(e.key==='Escape')closeMenu()});
