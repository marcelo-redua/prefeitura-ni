import { CommonModule } from '@angular/common';
import { isPlatformBrowser } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  Inject,
  isStandalone,
  OnInit,
  PLATFORM_ID,
  signal,
} from '@angular/core';
import { register, SwiperContainer } from 'swiper/element/bundle';
import { SwiperOptions } from 'swiper/types';

register();

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: `

<swiper-container class="mySwiper rounded-lg overflow-hidden" init="false">        <swiper-slide>
          <img
            src="../assets/guarda.jpg"
            alt="Feira de adoção de pets"
            class="w-full h-full object-cover"
          />
          <div
            class="absolute bottom-0 left-0 p-4 bg-gradient-to-t from-black via-transparent to-transparent w-full text-white"
          >
            <div class="text-content-with-bar">
              <p class="text-sm mb-2">29 // AGO</p>
              <h2 class="text-lg font-semibold">
                Prefeitura de Nova Iguaçu forma segunda turma de Guardas
                Municipais para reforçar a segurança na cidade
              </h2>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <img
            src="../assets/gatinhos.png"
            alt="Feira de adoção de pets"
            class="w-full h-full object-cover"
          />
          <div
            class="absolute bottom-0 left-0 p-4 bg-gradient-to-t from-black via-transparent to-transparent w-full text-white"
          >
            <div class="text-content-with-bar">
              <p class="text-sm mb-2">29 // AGO</p>
              <h2 class="text-lg font-semibold">
                Nova Iguaçu realiza feira de adoção de pets nesta sexta-feira
                [30]
              </h2>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <img
            src="../assets/sangue.jpg"
            alt="Feira de adoção de pets"
            class="w-full h-full object-cover"
          />
          <div
            class="absolute bottom-0 left-0 p-4 bg-gradient-to-t from-black via-transparent to-transparent w-full text-white"
          >
            <div class="text-content-with-bar">
              <p class="text-sm mb-2">29 // AGO</p>
              <h2 class="text-lg font-semibold">
                Hospital Geral de Nova Iguaçu precisa de doadores de sangue
              </h2>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <img
            src="../assets/eja.jpg"
            alt="Feira de adoção de pets"
            class="w-full h-full object-cover"
          />
          <div
            class="absolute bottom-0 left-0 p-4 bg-gradient-to-t from-black via-transparent to-transparent w-full text-white"
          >
            <div class="text-content-with-bar">
              <p class="text-sm mb-2">29 // AGO</p>
              <h2 class="text-lg font-semibold">
                Nova Iguaçu tem inscrições abertas para a EJA até quinta-feira
                (15)
              </h2>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <img
            src="../assets/cras.jpg"
            alt="Feira de adoção de pets"
            class="w-full h-full object-cover"
          />
          <div
            class="absolute bottom-0 left-0 p-4 bg-gradient-to-t from-black via-transparent to-transparent w-full text-white"
          >
            <div class="text-content-with-bar">
              <p class="text-sm mb-2">29 // AGO</p>
              <h2 class="text-lg font-semibold">
                CRAS Vila Iguassú completa dois meses neste fim de semana
              </h2>
            </div>
          </div>
        </swiper-slide>
      </swiper-container>
      <!-- Outros slides... -->

      <!-- Botões de navegação personalizados -->

  `,
  styleUrl: './carousel.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CarouselComponent implements OnInit {
  swiperElement = signal<SwiperContainer | null>(null);
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}
  ngOnInit(): void {
    const swiperElemConstructor = document.querySelector('swiper-container');
    const swiperOptions: SwiperOptions = {
      slidesPerView: 1,
      loop: true,
      pagination: false,
      navigation: {
        enabled: true,
      },
    };
    Object.assign(swiperElemConstructor!, swiperOptions);
    this.swiperElement.set(swiperElemConstructor as SwiperContainer);
    this.swiperElement()?.initialize();
  }
}
