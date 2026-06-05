import React, { useState, useEffect } from 'react'; 
 import { motion, AnimatePresence } from 'framer-motion'; 
 import { ChevronLeft, ChevronRight, Heart, Sparkles, Scroll, BookOpen } from 'lucide-react'; 
 import { romanticAudio } from '../audioEngine'; 
 
 export const PHASES = [ 
   { 
     id: 1, 
     title: "Прости за суету", 
     quote: "Я теряю ощущение часов и дней, но ты не исчезаешь из моего сердца...", 
     content: [ 
       "Моя любимая жена...", 
       "Прости меня, потому что дни украли меня между занятостью и работой, так что я забыл, что время бежит быстрее, чем я себе представляю. И сегодня мы уже в пятый день месяца, а я не отправил тебе обычное видео.", 
       "Я знаю, что это недостаточно хорошее оправдание, но правда в том, что когда я погружаюсь в обязанности, я теряю ощущение часов и дней, а ты не исчезаешь из моего сердца ни на мгновение." 
     ], 
     bgTone: "from-pink-950/45 to-rose-950/45", 
   }, 
   { 
     id: 2, 
     title: "Королева моего сердца", 
     quote: "Ты захватила его без армии, без осады и без битвы...", 
     content: [ 
       "И что касается ежемесячной дани, чтобы я жил в мире, хе-хе, я прошу самую прекрасную колонию в истории простить своих бедных подданных на этот раз.", 
       "Но между нами, ты действительно лучший завоеватель моего сердца. Ты захватила его без армии, и без осады, и без битвы.", 
       "Ты вошла в него с маленькой улыбкой и подняла свой флаг над каждой его пульсацией... И с того дня я никогда не думал о свободе от тебя." 
     ], 
     bgTone: "from-violet-950/45 to-fuchsia-950/45", 
   }, 
   { 
     id: 3, 
     title: "Самая красивая случайность", 
     quote: "Ты самая прекрасная встреча, которую Бог начертал на моем пути...", 
     content: [ 
       "Я люблю тебя, моя жена. Ты самая прекрасная случайность, которую Бог написал на моем пути.", 
       "Ты — тепло холодных дней, ты — спокойствие души, когда она устает,", 
       "Ты — родина сердца, когда теряются дороги." 
     ], 
     bgTone: "from-fuchsia-950/45 to-rose-950/45", 
   }, 
   { 
     id: 4, 
     title: "Сила моей тоски", 
     quote: "Я скучаю по тебе так сильно, что расстояния не могут этого измерить...", 
     content: [ 
       "Я скучаю по тебе так сильно, что расстояния не могут это измерить, и часы не могут это сосчитать, и слова не могут это полностью нести.", 
       "Я скучаю по тебе, как ночь скучает по первой звезде в небе,", 
       "И как земля скучает по дождю после долгого ожидания,", 
       "И как путник скучает по окну своего дома после долгого, долгого путешествия." 
     ], 
     bgTone: "from-rose-950/45 to-indigo-950/45", 
   }, 
   { 
     id: 5, 
     title: "Твои волшебные детали", 
     quote: "Я скучаю по деталям, которые никто во всем мире не замечает, кроме меня...", 
     content: [ 
       "Я скучаю по твоему голосу, по твоему смеху, по твоим маленьким деталям, которые никто не замечает, кроме меня.", 
       "По тому, как ты говоришь, по сообщениям, которые делают мой день гораздо лучше,", 
       "По твоему присутствию, которое делает этот мир менее жестоким и более милосердным." 
     ], 
     bgTone: "from-indigo-950/45 to-purple-950/45", 
   }, 
   { 
     id: 6, 
     title: "Реки моих чувств", 
     quote: "Ты не просто женщина, которую я люблю. Ты – бесконечная поэма...", 
     content: [ 
       "Моя любимая, если бы чувства были реками — мир бы утонул в моей любви к тебе.", 
       "Если бы слова были цветами — земля была бы наполнена бесконечными прекрасными садами.", 
       "Если бы тоска была звездами в небе — не осталось бы свободного места.", 
       "Ты не просто женщина, которую я люблю. Ты — поэма, у которой главы никогда не заканчиваются. Ты — мечта, от которой я не хочу просыпаться, и молитва, которую я хочу, чтобы она оставалась принятой всю жизнь." 
     ], 
     bgTone: "from-purple-950/45 to-rose-950/45", 
   }, 
   { 
     id: 7, 
     title: "Я выберу тебя дважды", 
     quote: "Если бы мне предложили весь мир и тебя — я выбрал бы тебя без сожалений...", 
     content: [ 
       "Я люблю тебя, когда ты рядом, и люблю тебя, когда ты далеко. И люблю тебя, когда мы разговариваем, и люблю тебя, когда скучаю. Люблю тебя в хорошие дни и люблю тебя в трудные дни, во всех версиях времени, через которые я прохожу.", 
       "Если бы мне дали жизнь дважды — я выбрал бы тебя дважды.", 
       "Если бы мне дали тысячу сердец — я выбрал бы тебя всеми сердцами.", 
       "Если бы мне предложили весь мир и тебя — я выбрал бы тебя, и сел бы рядом с тобой, наблюдая, как мир уходит без всякого сожаления." 
     ], 
     bgTone: "from-rose-950/45 to-pink-950/45", 
   }, 
   { 
     id: 8, 
     title: "И через тысячу лет", 
     quote: "Я люблю тебя до последнего вздоха, до последнего удара в моей груди...", 
     content: [ 
       "Самая прекрасная женщина, поселившаяся в моей душе... Ты — свет, который сопровождает меня, когда дороги темнеют. Ты — безопасность, к которой я возвращаюсь, когда сильно устаю. Ты — самая красивая часть каждого дня, который я жил, живу и буду жить в будущем.", 
       "Я люблю тебя больше, чем могут написать буквы, и больше, чем описывают все поэмы на земле. И я буду любить тебя сегодня, завтра, и через тысячу дней, и через тысячу лет.", 
       "И я буду говорить тебе каждый раз: ты — самое дорогое, что у меня есть, самое прекрасное, что подарил мне Бог, и величайшая победа моего сердца.", 
       "Я люблю тебя, моя жена. Я люблю тебя до последнего удара в моей груди, до последнего дыхания моей жизни. Любовью, у которой нет конца, и есть только твоё красивое имя... Елена ❤️" 
     ], 
     bgTone: "from-pink-950/50 to-purple-950/50", 
   } 
 ]; 
 
 export const LetterBook: React.FC = () => { 
   const [viewMode, setViewMode] = useState<'slides' | 'scroll'>('slides'); 
   const [currentSlide, setCurrentSlide] = useState(0); 
   const [isAutoplay, setIsAutoplay] = useState(false); 
 
   // Handle Autoplay Slideshow 
   useEffect(() => { 
     let timer: any; 
     if (isAutoplay && viewMode === 'slides') { 
       timer = setInterval(() => { 
         setCurrentSlide(prev => (prev + 1) % PHASES.length); 
       }, 7500); // Transition every 7.5 seconds 
     } 
     return () => clearInterval(timer); 
   }, [isAutoplay, viewMode]); 
 
   const handleNext = () => { 
     romanticAudio.playTinkle(); 
     setCurrentSlide(prev => (prev + 1) % PHASES.length); 
   }; 
 
   const handlePrev = () => { 
     romanticAudio.playTinkle(); 
     setCurrentSlide(prev => (prev - 1 + PHASES.length) % PHASES.length); 
   }; 
 
   const handleDotClick = (index: number) => { 
     romanticAudio.playTinkle(); 
     setCurrentSlide(index); 
   }; 
 
   return ( 
     <div id="love-letter-module" className="flex flex-col gap-6 w-full max-w-4xl mx-auto"> 
       {/* View Switcher Controls */} 
       <div className="flex justify-between items-center bg-[#120704]/40 backdrop-blur-md rounded-2xl p-2 border border-rose-950/40"> 
         <div className="flex gap-2"> 
           <button 
             id="btn-letters-slides-mode" 
             onClick={() => { romanticAudio.playTinkle(); setViewMode('slides'); }} 
             className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-300 cursor-pointer ${ 
               viewMode === 'slides' 
                 ? 'bg-rose-950/40 text-rose-200 border border-rose-500/30 shadow-[0_0_10px_rgba(225,29,72,0.15)] font-semibold' 
                 : 'text-rose-300/60 hover:text-rose-200 hover:bg-white/5' 
             }`} 
           > 
             <BookOpen className="w-4 h-4 text-rose-400" /> 
             Интерактивные Главы 
           </button> 
           <button 
             id="btn-letters-scroll-mode" 
             onClick={() => { romanticAudio.playTinkle(); setViewMode('scroll'); }} 
             className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-300 cursor-pointer ${ 
               viewMode === 'scroll' 
                 ? 'bg-rose-950/40 text-rose-200 border border-rose-500/30 shadow-[0_0_10px_rgba(225,29,72,0.15)] font-semibold' 
                 : 'text-rose-300/60 hover:text-rose-200 hover:bg-white/5' 
             }`} 
           > 
             <Scroll className="w-4 h-4 text-rose-400" /> 
             Старинный Свиток (Целиком) 
           </button> 
         </div> 
 
         {viewMode === 'slides' && ( 
           <button 
             id="btn-toggle-autoplay-slideshow" 
             onClick={() => { romanticAudio.playTinkle(); setIsAutoplay(!isAutoplay); }} 
             className={`flex items-center gap-1 px-3 py-1.5 rounded-lg text-[10px] sm:text-xs font-mono uppercase tracking-wider transition-all cursor-pointer ${ 
               isAutoplay 
                 ? 'bg-rose-500/20 text-rose-300 border border-rose-500/40 animate-pulse' 
                 : 'bg-zinc-800 text-zinc-400 hover:bg-zinc-700' 
             }`} 
           > 
             <Sparkles className="w-3.5 h-3.5" /> 
             {isAutoplay ? 'Авто-Чтение: ВКЛ' : 'Авто-Чтение'} 
           </button> 
         )} 
       </div> 
 
       <AnimatePresence mode="wait"> 
         {viewMode === 'slides' ? ( 
           /* SLIDES METHOD OF TELLING THE LOVE SCROLL */ 
           <motion.div 
             key="slides" 
             initial={{ opacity: 0, y: 15 }} 
             animate={{ opacity: 1, y: 0 }} 
             exit={{ opacity: 0, y: -15 }} 
             className="relative" 
           > 
             {/* Main Letter Card Frame */} 
             <div className={`relative overflow-hidden rounded-[40px] border border-white/10 bg-gradient-to-b from-rose-950/20 to-purple-950/20 backdrop-blur-xl p-8 sm:p-12 shadow-2xl transition-all duration-1000 min-h-[460px] flex flex-col justify-between`}> 
               
               {/* Decorative Corner Filigrees and Roses */} 
               <div className="absolute top-4 left-4 text-rose-500/20 font-serif select-none text-2xl">❀</div> 
               <div className="absolute top-4 right-4 text-rose-500/20 font-serif select-none text-2xl">❀</div> 
               <div className="absolute bottom-4 left-4 text-rose-500/20 font-serif select-none text-2xl">❀</div> 
               <div className="absolute bottom-4 right-4 text-rose-500/20 font-serif select-none text-2xl">❀</div> 
               
               {/* Floating Heart background subtle ornament */} 
               <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] pointer-events-none select-none"> 
                 <Heart className="w-72 h-72 fill-rose-500 text-rose-500" /> 
               </div> 
 
               {/* Slide Card Header */} 
               <div className="text-center pb-4 border-b border-white/10 relative z-10"> 
                 <span className="text-[10px] uppercase font-mono tracking-widest text-rose-300/80 mb-1 block">Глава {currentSlide + 1} из {PHASES.length}</span> 
                 <h3 className="font-serif text-2xl sm:text-3xl font-medium text-transparent bg-clip-text bg-gradient-to-b from-white to-rose-200 tracking-wide"> 
                   {PHASES[currentSlide].title} 
                 </h3> 
                 <p className="text-xs italic text-rose-300 font-hand text-lg mt-1 tracking-wider"> 
                   « {PHASES[currentSlide].quote} » 
                 </p> 
               </div> 
 
               {/* Main Cursive handwritten text body */} 
               <div className="py-6 sm:py-8 flex flex-col justify-center items-center flex-grow text-center relative z-10"> 
                 <div className="love-handwriting text-xl sm:text-2xl text-rose-100 max-w-3xl whitespace-pre-wrap leading-relaxed space-y-4 px-2 sm:px-4"> 
                   {PHASES[currentSlide].content.map((p, idx) => ( 
                     <motion.p 
                       key={idx} 
                       initial={{ opacity: 0, y: 10 }} 
                       animate={{ opacity: 1, y: 0 }} 
                       transition={{ delay: idx * 0.15, duration: 0.8 }} 
                     > 
                       {p} 
                     </motion.p> 
                   ))} 
                 </div> 
               </div> 
 
               {/* Love Slide footer / Pagination controls */} 
               <div className="flex items-center justify-between pt-4 border-t border-white/10 relative z-10 gap-4 mt-auto"> 
                 <button 
                   id="btn-letter-prev" 
                   onClick={handlePrev} 
                   className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-rose-200 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 transition-colors cursor-pointer text-xs sm:text-sm font-medium" 
                 > 
                   <ChevronLeft className="w-4 h-4 text-rose-400" /> Предыдущая 
                 </button> 
 
                 {/* Stars/Dots pagination indicator */} 
                 <div className="hidden sm:flex gap-1.5"> 
                   {PHASES.map((_, i) => ( 
                     <button 
                       key={i} 
                       id={`btn-dot-${i}`} 
                       onClick={() => handleDotClick(i)} 
                       className={`w-6 h-6 rounded-full flex items-center justify-center transition-all cursor-pointer ${ 
                         currentSlide === i 
                           ? 'scale-115 bg-rose-950/40 border border-rose-400/80 text-rose-300 font-bold shadow-[0_0_8px_rgba(225,29,72,0.4)]' 
                           : 'bg-zinc-800 text-zinc-400 hover:bg-zinc-700 font-normal border border-transparent' 
                       } text-xs`} 
                     > 
                       {i + 1} 
                     </button> 
                   ))} 
                 </div> 
 
                 <button 
                   id="btn-letter-next" 
                   onClick={handleNext} 
                   className="flex items-center gap-1.5 px-5 py-2.5 rounded-xl text-white bg-gradient-to-r from-rose-600 to-red-800 hover:from-rose-500 hover:to-red-700 transition-colors shadow-lg shadow-rose-950/40 cursor-pointer text-xs sm:text-sm font-semibold hover:scale-103 active:scale-97" 
                 > 
                   {currentSlide === PHASES.length - 1 ? 'Сначала' : 'Прочесть Дальше'}{' '} 
                   <ChevronRight className="w-4 h-4 fill-white" /> 
                 </button> 
               </div> 
 
             </div> 
 
             {/* Pagination footer beneath slide card for mobile */} 
             <div className="flex sm:hidden justify-center gap-1 mt-4"> 
               {PHASES.map((_, i) => ( 
                 <button 
                   key={i} 
                   onClick={() => handleDotClick(i)} 
                   className={`w-2.5 h-2.5 rounded-full transition-all cursor-pointer ${ 
                     currentSlide === i ? 'w-6 bg-rose-400' : 'bg-white/25 hover:bg-white/40' 
                   }`} 
                 /> 
               ))} 
             </div> 
           </motion.div> 
         ) : ( 
           /* TRADITIONAL SCROLL METHOD FOR READING ALL AS ONE PIECE */ 
           <motion.div 
             key="scroll" 
             initial={{ opacity: 0, scale: 0.98 }} 
             animate={{ opacity: 1, scale: 1 }} 
             exit={{ opacity: 0, scale: 0.98 }} 
             className="relative" 
           > 
             {/* Classic Scroll design matching Elegant Dark */} 
             <div className="relative overflow-hidden rounded-[40px] border border-white/10 bg-[#120704]/90 backdrop-blur-xl p-8 sm:p-14 shadow-2xl max-h-[750px] overflow-y-auto"> 
               
               {/* Golden side scroll banners left and right */} 
               <div className="absolute top-0 bottom-0 left-0 w-1 bg-gradient-to-b from-rose-800 via-rose-400 to-rose-800 shadow-md"></div> 
               <div className="absolute top-0 bottom-0 right-0 w-1 bg-gradient-to-b from-rose-800 via-rose-400 to-rose-800 shadow-md"></div> 
 
               {/* Scroll Inner Heading */} 
               <div className="text-center pb-8 border-b border-rose-950/60 relative z-10 select-none"> 
                 <span className="text-rose-400 text-3xl font-serif">❈ ❈ ❈</span> 
                 <h3 className="font-serif text-3xl sm:text-4xl font-semibold text-transparent bg-clip-text bg-gradient-to-b from-white to-rose-200 mt-2 tracking-widest love-handwriting"> 
                   Вечное Письмо для Елены 
                 </h3> 
                 <p className="text-xs text-rose-300/60 font-mono tracking-widest uppercase mt-1"> 
                   От глубоких звёзд космоса до последней пульсации сердца 
                 </p> 
               </div> 
 
               {/* Long formatted text */} 
               <div className="relative z-10 py-10 max-w-2xl mx-auto space-y-12"> 
                 {PHASES.map((phase, pIdx) => ( 
                   <div key={phase.id} className="text-center group"> 
                     <div className="flex items-center justify-center gap-2 mb-3"> 
                       <span className="h-[1px] w-8 bg-rose-950/40 group-hover:w-16 transition-all duration-500"></span> 
                       <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" /> 
                       <span className="font-serif text-lg text-rose-200 font-semibold">{phase.title}</span> 
                       <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" /> 
                       <span className="h-[1px] w-8 bg-rose-950/40 group-hover:w-16 transition-all duration-500"></span> 
                     </div> 
 
                     <div className="space-y-4 love-handwriting text-xl sm:text-2xl text-rose-100 leading-relaxed px-4"> 
                       {phase.content.map((p, idx) => ( 
                         <p key={idx} className="hover:text-rose-200 transition-colors"> 
                           {p} 
                         </p> 
                       ))} 
                     </div> 
 
                     {pIdx < PHASES.length - 1 && ( 
                       <div className="flex justify-center items-center py-8 opacity-25"> 
                         <span className="w-1.5 h-1.5 rounded-full bg-rose-400 mx-1"></span> 
                         <span className="w-2 h-2 rounded-full bg-rose-400 mx-1"></span> 
                         <span className="w-1.5 h-1.5 rounded-full bg-rose-400 mx-1"></span> 
                       </div> 
                     )} 
                   </div> 
                 ))} 
               </div> 
 
               {/* Scroll Inner Footer */} 
               <div className="text-center pt-8 border-t border-rose-950/60 relative z-10 select-none"> 
                 <p className="font-cursive text-3xl sm:text-4xl text-rose-200"> 
                   Твой муж, Мад 
                 </p> 
                 <p className="text-[10px] text-rose-400/40 uppercase font-mono tracking-widest mt-2"> 
                   Июнь 2026. Навсегда и вовек. 
                 </p> 
               </div> 
 
             </div> 
           </motion.div> 
         )} 
       </AnimatePresence> 
     </div> 
   ); 
 }; 
