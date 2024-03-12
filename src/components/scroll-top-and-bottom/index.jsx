import {useRef} from "react";

import BackHome from "../back-home";
import "./style.css";

const ScrollTopAndBottom = () => {
  const bottomRef = useRef(null);

  const handleScrollTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  const handleScrollBottom = () => {
    bottomRef.current.scrollIntoView({behavior: "smooth"});
  };

  return (
    <>
      <BackHome title="Scroll Top And Bottom" />
      <div className="stb-container">
        <button onClick={handleScrollBottom} className="stb-btn">
          Scroll Bottom
        </button>
        <div>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium
          tenetur ipsum labore, eveniet sunt assumenda sapiente alias aperiam
          placeat sit quae impedit at voluptate. Aliquam accusantium ullam quo
          molestiae quidem odio, similique quisquam laboriosam esse omnis sunt
          enim, exercitationem tenetur praesentium illum! Cum facilis maiores
          repellendus expedita dignissimos iusto illo voluptate consequatur
          reiciendis reprehenderit sequi similique, officiis fugiat quo ullam
          deserunt ad quaerat temporibus numquam distinctio? Fuga corrupti minus
          quaerat accusantium saepe. Earum eligendi neque iure harum officia vel
          hic at quia, id, laudantium numquam rem tenetur incidunt porro ipsum
          dolorem necessitatibus dicta quae cupiditate ad in alias magni illum
          qui? Ipsa recusandae reprehenderit similique saepe delectus hic
          officia temporibus provident, eum incidunt vitae necessitatibus? Error
          perferendis consequatur numquam minima id modi dolorum laudantium
          praesentium impedit! Cupiditate odio beatae itaque quae autem.
          Voluptate fugit, sit illum veritatis ipsam earum. Nihil voluptates,
          deserunt quia placeat quidem fugit? Earum nam, nemo alias minus soluta
          nesciunt ea saepe! Officia quia perferendis architecto provident,
          omnis sint natus sit molestias molestiae excepturi harum, soluta fuga
          ipsum alias! Laborum perspiciatis, debitis ullam nemo exercitationem
          itaque earum maxime, libero amet, similique nesciunt dolor quaerat.
          Minima, voluptate. Illo consequuntur est obcaecati neque nihil
          adipisci sed, nam eaque aut, exercitationem, deserunt hic molestiae
          sint voluptates sapiente! Quibusdam modi eum nisi aut laudantium dicta
          nam accusamus, possimus, quae consequatur mollitia doloribus
          voluptate, consequuntur expedita reiciendis rem ducimus corrupti
          dolorem enim recusandae voluptas sunt. Adipisci iure blanditiis nobis
          accusamus natus cum, necessitatibus pariatur a consectetur doloribus
          perferendis quae quas reprehenderit aut accusantium quaerat tenetur
          sunt est commodi vel esse omnis ad corporis. Natus deleniti dolor
          laudantium, maiores nemo, suscipit, dignissimos eligendi debitis odio
          ipsum commodi incidunt illo numquam voluptatum hic qui quidem pariatur
          ipsa. Minima sequi ab veritatis aliquam tempora neque vero ratione
          voluptatibus, blanditiis sapiente rem voluptatem fuga deserunt non
          natus provident impedit harum quam veniam iste illo quasi, facilis nam
          dolores. Necessitatibus aliquid in obcaecati fugiat mollitia odio
          quaerat nulla assumenda consequatur officiis, sapiente totam vitae
          tempore inventore accusantium aspernatur reprehenderit atque! Beatae
          pariatur, distinctio a eligendi tempore praesentium, molestias iusto
          natus magnam debitis, velit numquam rem libero dicta dolores nam
          deserunt dolorum! Incidunt praesentium totam quisquam, fugit, quo iure
          vel velit maxime, reiciendis quidem repudiandae. Suscipit excepturi
          accusantium tenetur. Quo eligendi saepe sequi laudantium, dolorem
          similique facere! Quae, assumenda temporibus nisi consequuntur dicta,
          distinctio odit dolor deleniti, possimus accusantium alias provident
          ipsam tempore libero exercitationem deserunt ab ut eveniet adipisci
          fugit. Velit expedita corrupti fugiat, officia eligendi quidem
          dolorem, deserunt eaque, adipisci vitae cum. Sequi voluptas similique
          cumque! Facere possimus velit culpa quis amet reiciendis nam
          doloremque eaque assumenda atque commodi, similique dolorum quidem
          magnam omnis at tempora consequuntur veritatis inventore! Quod, eum
          labore laboriosam tempora similique incidunt consectetur officia
          distinctio est expedita repellat inventore culpa ex quo voluptatibus
          beatae placeat praesentium? Perspiciatis maiores consequatur a nam sed
          ea repellendus esse laboriosam pariatur iure commodi doloremque
          possimus libero, iste eos repellat laborum vel! Fugit, optio dolor.
          Ratione repellendus recusandae eveniet commodi tempora aliquid
          voluptatem quia! Nesciunt fugiat et adipisci accusamus labore,
          perferendis, unde delectus hic nostrum repudiandae vitae provident
          minima velit obcaecati saepe autem ullam quidem quo molestiae modi
          perspiciatis tempora molestias! Neque veritatis corrupti corporis est
          dolores earum ipsum perferendis a molestias optio. Quis, aliquam
          beatae facere quasi quod rem laudantium tempora doloremque! Laborum
          cupiditate reprehenderit pariatur ipsa voluptate molestiae reiciendis
          quisquam consequatur. Consequuntur laborum doloremque sunt eaque,
          dolor quasi praesentium ad nesciunt nisi molestiae tempora explicabo
          fuga ipsa quia. Natus exercitationem ex, cumque sed hic ullam
          doloremque earum, officiis consectetur, quia quae architecto itaque.
          Fugit doloremque nesciunt laboriosam nihil vitae aliquid labore
          quaerat et nostrum odit esse est ex iusto dolores eum nisi assumenda
          qui, a unde ullam facilis ducimus ea numquam! Cupiditate, ut eius
          perspiciatis modi quod inventore maxime quos voluptatem atque
          veritatis architecto labore qui sequi voluptatum tenetur quasi
          quibusdam ipsa. Quos, magnam! Nihil, quibusdam! Ipsam natus illo
          minima sed, eum recusandae voluptates doloribus voluptate beatae
          optio, perspiciatis reprehenderit quo hic. Animi obcaecati qui sint
          blanditiis illo ipsum quae est voluptatem possimus atque nisi, eaque
          dignissimos exercitationem! Voluptatum dicta at aliquid rerum eligendi
          libero expedita iure architecto aspernatur vero, numquam facilis quas,
          similique odit reprehenderit in assumenda recusandae ipsum. Aut
          blanditiis eius molestiae libero praesentium at, voluptate dolor
          quidem repudiandae explicabo numquam illo distinctio id aperiam
          aspernatur soluta odio, sit veritatis minima saepe ad quod dolore
          cupiditate! Eveniet dolorum delectus soluta fugit tenetur iste maxime
          porro exercitationem. Harum iste rem vitae nisi aperiam vel
          dignissimos, quae sint error odio corrupti atque ipsam fugiat maiores
          veritatis ex soluta quos fuga minus, facere numquam inventore,
          accusamus minima in. Recusandae temporibus aut eligendi repellendus,
          neque magni dicta placeat suscipit corporis quia! Cupiditate pariatur
          architecto porro esse nam, dignissimos id facere soluta omnis quos
          delectus eligendi corrupti rem placeat sint nobis atque? Id iste,
          dolor quis necessitatibus illum pariatur accusantium at earum adipisci
          minus voluptatum natus aspernatur ducimus libero recusandae unde nisi
          consectetur perspiciatis facilis! Nihil dolorum, expedita enim
          reiciendis praesentium at. Ducimus, minus. Consequuntur reiciendis
          dolor possimus blanditiis itaque neque natus quasi commodi labore
          sequi, alias iure earum cupiditate ut iusto ab. Pariatur nostrum saepe
          ipsa vel, quae ut, labore nam odio dignissimos eius excepturi amet.
          Accusantium dignissimos, error voluptatibus quae eum dolorum
          exercitationem in consequatur deleniti quam, nulla eos impedit dolor
          fuga praesentium temporibus sunt repellat repellendus iure? Asperiores
          tenetur alias doloremque minus harum laboriosam cumque, fugiat ea
          reiciendis praesentium dolore, cum provident repudiandae nemo labore?
          Tempore officiis hic atque? Soluta iste rerum facere? Tenetur
          architecto cum numquam sequi iure minima ex eveniet accusantium beatae
          facilis quia, nesciunt qui eos maxime ducimus quaerat cupiditate
          natus. Impedit saepe quo fuga dicta possimus inventore repellendus
          suscipit maxime aliquam est similique quam tempora libero, ratione qui
          excepturi quis, explicabo laborum ullam harum porro temporibus beatae
          voluptate magnam. Praesentium libero sint molestias dolores
          repellendus repellat eligendi illo quibusdam. A at animi, sapiente
          iusto ducimus officia dolorem, pariatur ipsam nihil itaque est minima!
          Distinctio quibusdam error dolorum modi ipsum iusto nesciunt dolores
          facilis, voluptatum commodi voluptate, itaque placeat suscipit aliquam
          ipsa?
        </div>
        <button onClick={handleScrollTop} className="stb-btn">
          Scroll Top
        </button>
        <div ref={bottomRef}></div>
      </div>
    </>
  );
};

export default ScrollTopAndBottom;
