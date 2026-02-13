document.addEventListener("DOMContentLoaded", () => {
  // Smooth scroll from hero button
  const scrollBtn = document.getElementById("scrollToTributes");
  const tributesSection = document.getElementById("tributes");

  if (scrollBtn && tributesSection) {
    scrollBtn.addEventListener("click", () => {
      tributesSection.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }

  // Tributes (EXACT text preserved)
  const tributes = [
    {
      name: "Njoki",
      role: "Daughter",
      badge: "Tribute",
      text:
`Dear Dad. You've been a loving father. Giver. Constant provider. Your role in shaping our lives and the
kind of person I have grown to be is incomparable. You strengthened and encouraged me.
You are painfully missed and loved. I pray for your soul and know you are in a heavenly place. You are
now at rest. Reunited with Mum and Bob. I will always love you.
Njoki (Daughter)`
    },

    {
      name: "Elizabeth Waringa",
      role: "Daughter",
      badge: "Tribute",
      text:
`To capture the memory of 60 years with you as dad and compress in one page does not do justice to
the many facets I got to know of you. Words cannot describe the sadness we felt when God called you
home on 26th December 2025 after spending a lovely Christmas Day with you where you even sang
the Merry Christmas song with us and cut the cake. We had been praying and wishing you to continue
to be with us for 100 years and beyond. I will miss your love, kindness generosity, fun times & laughter
you shared with me & my siblings as we grew up. You emphasized the importance of attending Mass
as a family every Sunday and ensuring we grew up in the Christian faith Thereafter our Sunday lunches
of chips & swimming were fun filled. The night drive in movies you took us to were also fun.
You & mum were strong on the value of education which you showed by encouraging good grades
and also encouraging & supported me & my siblings  to engage in extracurricular activities eg swimming music, girl guides, scouts You & our late mum always ensured you attended  the school functions
(Parents & sports days) You paid for us to attend all the educational school trips to various places
around the country. You passed on your love for country music and other music genres to us. You loved
playing the guitar & accordion at home while we watched you also sing. .You also bought us a mini
keyboard to learn how to play music on it. You paid for us to learn foreign languages even as you tried
to teach us Hindu which you had learnt in India. You engaged us whenever you were carrying out
repair works at home making me & my siblings become mini plumbers & handymen around the house. 
You taught & emphasized to us the  value of  honesty  to enable us become law abiding citizens  You
emphasized the importance of hard work so we can contribute our skills for community and nation
building. On National Celebrations eg Jamhuri & Madaraka Day celebrations you took us to Uhuru Park
to watch though we mainly enjoyed the entertainment and the ice cream.  You always took us to  Nairobi International Agricultural Show  starting at the Agricultural Section then to International Stands for
business connections which you were very interested in.  As children we sometimes preferred to start at
the fun fare children's section especially the rides on the Merry Go Round . We enjoyed the army &
police displays on the Tattoo nights at the show. Thank you especially for the prayers you & mum
offered to God for us and the invaluable advice &  guidance in our lives. You also prayed for God to
give us fortitude and strength to face any challenges that may come our way in life. Thank you for your
strength & upbeat look on life.. You taught us resilience as we watched you navigate life & even in difficult circumstances you remained strong finding strength through faith in the Lord. We will miss you
dearly May God grant you eternal heavenly peace & rest till we meet again
Love, Elizabeth Waringa [Daughter`
    },

    {
      name: "Jimmy",
      role: "Son",
      badge: "Tribute",
      text:
`Dear Dad (Fafa).
It's hard to believe you're no longer with us. I thank God for the 91 years He blessed you to live. Your
strength and courage even at your advanced age will be something I always admire. Rest well with
the angels. Love you always,
Jimmy (Son).`
    },

    {
      name: "Margaret Waruguru Ngotho Ogai",
      role: "Daughter",
      badge: "Tribute",
      text:
`Margaret Waruguru Ngotho Ogai (Daughter)
I give deep thanks to God for blessing me and my siblings with my father, who we called Fafa. Fafa
loved his family fiercely, provided and protected us and lived a fullfilled life of intergrity, selfless giving
and achievement against the odds of his very humble background as an orphan raised by his grandmother in adversity.
Fafa has been and remains my true north and taught me lifelong lessons on values of integrity, honesty
dependability, hard work, modesty, sharing, independence, faith, hope and love simply by the way he
lived his life.`
    },

    {
      name: "Margaret Waruguru Ngotho Ogai",
      role: "Daughter",
      badge: "Tribute",
      text:
`Margaret Waruguru Ngotho Ogai (Daughter)
So how do I give a tribute to Fafa? This great man who has been my rock, my true north, my greatest
cheerleader, my friend. Honestly, as I write this, I am still in shock, denial, bargaining with God and
scared slightly on how I and siblings will carry on this great legacy but I trust that God's love never fails
and He will give us the strength, wisdom and courage.
As a girl child born in the late sixties, I believe my birth was unremarkable but my dad embraced me
with such love and together with my mother, raised me in a home of love, security and met all my
needs. In fact, all my life, Fafa remained my constant and a springboard from where I have established
my life. Fafa was fun loving and brought joyfullness to life. He took us swimming, movies, drives upcountry during Christmas and regular get togethers with both family and friends.
As a proudly African man, when we were young, my younger sister Wairimu and I tried calling my father
daddy but he firmly corrected us to call him Fafa. Fafa loved eating roasted meat and after a meal he
would call all the young children at home, including me, and oil our faces and hands. Now I see that
he was blessing us, massaging us and bonding with us through this simple act. I was indeed a daddy's
girl.
Fafa was highly educated as economist trained in India and a dedicated and patriotic civil servant (he
served in various ministries of Finance, Commerce, Lands, Water, Foreign Affairs in Nairobi and also
briefly worked in Dar es Salaam in the East Africa Community, founder GM at Uchumi Supermarket). He
was widely travelled (several countries across far east Japan to the west, USA and UK) and this gave
him a culturally global view to make independent judgement of emerging issues rather than being a
conformist and yet he never lost his African roots. So he raised his children differently: to be highly educated, independent yet morally grounded, and family oriented. As i grew in corporate world, I was
often considered to independent, agressive, "too much" but this helped propel my career and leadership...the impact of Fafa instilling in me self confidence.
As a senior civil servant, Fafa served with intergrity and often reminded us that all that he owned was
acquired justly. He took advantage of opportunities and invested wisely - buying Loresho as part of
senior civil servants housing scheme in early 70s, and where necessary jointly buying properties with his
close friends and relatives (although all these partnerships later dissolved after accomplishing the
objective). He worked hard by going to office every day and still managing to drop and pick us from
school every day for over 20 years. How and where he and mami got this strength is a marvel to me.
As a protector and provider, Fafa looked after my mother during her terminal illness. When the medical
bills grew and friends urged him to fundraise, Fafa stubbornly said that this was his responsibility and
managed to pay. My late mum often remarked that Fafa loved her fully, gave her a wonderful family
and even in her illness, he chose to remain by her side and took care of her till death. Similarly when
Njoki, our first born sister suffered a stoke over 24 years ago, my father paid for all her medical care and
moved her back home where he continued to look after her untill his death. This deeply impacted me
on being dependable and taking up responsibility.
On equity, Fafa gave all his children quality education. All of us attended good quality public schools
and national high schools. Fafa never failed to pay school fees on time ensuring our education was not
disrupted. As a result, me and my siblings excelled in our studies.
Fafa was generous and he and mami opened their home. Many of my uncles and cousins lived with us
at home. Also my nephew, Brian, lived at home and received all the care from our parents and his
mum, Njoki.

Margaret Waruguru Ngotho Ogai (Daughter)
On modesty, Fafa was a quintessential economist. He invested in fixed assets, education and health for
his family members, and minimised consumerism and wastage. Fafa never bought a new car quipping
that once you drive out of the showroom, the car loses value! This simplicity and modesty has impacted
on all his children and the next generation.
When I got married, both Fafa and Mami welcomed my husband, Isaac Ogai, and later our daughters
Joy and Lisa to the family. Being from different region of Kenya never presented as a barrier as my parents fully embraced Isaac as their son and his family as in laws. This helped us greatly as we raised our
family in a culturally diverse manner. Fafa always prayed for his children by name. He prayed for unity
and fortitude to face the challenges. I could ramble on and on the the great man my father was and
his impact in my life. I will continue to reflect on Fafa and exemplar of a well lived life. Thank you Fafa.
Fafa, it is very hard to say goodbye. But my faith and hope is that a good man never dies and I am
certain we shall meet again. I will love you always.
You raised me up so I can stand on mountains....
Go well my beloved Fafa. Rest now in God's loving arms till we meet again.
Father. Friend. Mentor. Confidant.
Today I celebrate you, Fafa, a man whose quiet strength, wisdom, and unconditional love have
shaped my life in ways words can hardly express. As your fifth-born (daughter), I am privileged to have
grown up in a stable home, where both Mami and yourself were intentional in the upbringing of your
seven children, from instilling Christian values to emphasising the value of hard work in all spheres of
one’s life.
When I got married, you fully embraced my family (including my in-laws), with whom we shared every
Christmas, including your last one this December 2025.
In 2011, I joined you in the management of your diverse business affairs, and with your guidance have
succeeded in streamlining the operations of the units, albeit through an increasingly difficult environment. Fafa, you were a guiding light in our family, a source of comfort in difficult moments, and a pillar
of support who believed in each one of your children.
And finally, the greatest gift: Our Catholic Faith. You embraced the Cross of your life with Courage,
Grace and Humility.
The legacy you leave behind is a testimony of resilience.
Forever in my heart, Fafa.
“Koma thatyu”
Lucy Wairimu Komora (Daughter)
“Kamigiri”`
    },

    {
      name: "Wambui",
      role: "Daughter",
      badge: "Tribute",
      text:
`Dear Dad,
Thank you Fafa for being a resilient , kind, generous, and loving Father. You paved the way for us to
pursue and achieve whatever we set our minds to do without fear . You always encouraged us to
pursue our dreams and take responsibility for whatever life choices we made. You have been a safety
net for us when we needed it .Thank you for being our rock. I’m sad I will not be able to see you in
person on this earth . However , I am grateful to God for blessing you with a long life where you were
able to enjoy the company of your children, grandchildren, and great grandchildren.Your legacy will
live on through us. Now you are reunited with Mum. Forever in my heart. Love you,
Your daughter Wambui`
    }
  ];

  const grid = document.getElementById("tributesGrid");
  if (!grid) return;

  // Render cards
  tributes.forEach((t, i) => {
    const card = document.createElement("article");
    card.className = "ft-card";

    card.innerHTML = `
      <div class="ft-card__top">
        <div class="ft-card__who">
          <h3 class="ft-card__name">${escapeHtml(t.name)}</h3>
          <p class="ft-card__role">${escapeHtml(t.role)}</p>
        </div>
        <div class="ft-card__badge">${escapeHtml(t.badge || "Tribute")}</div>
      </div>

      <div class="ft-card__body">
        <p class="ft-card__text is-collapsed" id="tributeText-${i}">${escapeHtml(t.text)}</p>

        <div class="ft-card__actions">
          <button
            class="ft-card__toggle"
            type="button"
            aria-expanded="false"
            aria-controls="tributeText-${i}"
            data-target="tributeText-${i}"
          >
            Read full tribute
            <span class="ft-card__toggleIcon" aria-hidden="true">▾</span>
          </button>

          <div class="ft-card__rule" aria-hidden="true"></div>
        </div>
      </div>
    `;

    grid.appendChild(card);
  });

  // Toggle expand/collapse
  grid.addEventListener("click", (e) => {
    const btn = e.target.closest(".ft-card__toggle");
    if (!btn) return;

    const id = btn.getAttribute("data-target");
    const p = document.getElementById(id);
    if (!p) return;

    const expanded = btn.getAttribute("aria-expanded") === "true";

    btn.setAttribute("aria-expanded", String(!expanded));
    p.classList.toggle("is-collapsed", expanded);

    btn.childNodes[0].textContent = expanded ? "Read full tribute" : "Collapse tribute";
  });

  // Simple HTML escape so punctuation is preserved safely
  function escapeHtml(str) {
    return String(str)
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");
  }
});
