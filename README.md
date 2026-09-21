# Ramazzini

Landing page comercial para Ramazzini, enfocada en captación de leads, agendamiento de demos y prueba gratuita de 15 días para equipos de salud ocupacional.

## Stack

- Next.js App Router
- TypeScript
- CSS global
- Resend para notificaciones del formulario
- Metadata SEO, Open Graph, sitemap, robots y datos estructurados
- Google Tag Manager; Google Analytics 4 se administra dentro del contenedor GTM

## Desarrollo

```bash
npm install
npm run dev
```

El sitio queda disponible normalmente en `http://localhost:3000`. Si ese puerto está ocupado, Next.js usará el siguiente disponible.

## Variables de entorno

Copia `.env.example` a `.env.local` y configura:

```bash
RESEND_API_KEY=
RESEND_FROM="Ramazzini <soporte@ramazzini.app>"
DEMO_NOTIFY_TO=soporte@ramazzini.app
NEXT_PUBLIC_SITE_URL=https://get.ramazzini.app
NEXT_PUBLIC_APP_URL=https://ramazzini.app/auth/onboarding
NEXT_PUBLIC_CAL_URL=https://cal.com/ramazzini/demo-personalizada-de-ramazzini
NEXT_PUBLIC_WHATSAPP_NUMBER=526681702850
NEXT_PUBLIC_GTM_ID=GTM-MPW2CTVB
NEXT_PUBLIC_CLARITY_ID=ylwa6auqar
NEXT_PUBLIC_CONTACT_EMAIL=soporte@ramazzini.app
NEXT_PUBLIC_SUPPORT_EMAIL=soporte@ramazzini.app
NEXT_PUBLIC_CONTACT_PHONE=
```

Las variables `RESEND_API_KEY`, `RESEND_FROM` y `DEMO_NOTIFY_TO` se usan solo en el servidor para procesar el formulario. El formulario valida los campos requeridos antes de enviar correos por Resend. Si `RESEND_API_KEY` no está configurada o el envío falla, el sitio muestra una alternativa para reintentar o continuar por WhatsApp; nunca confirma una solicitud que no pudo procesar.

Para producción, cargar estos valores en el panel del proveedor de hosting. No se debe subir `RESEND_API_KEY` a GitHub. Las solicitudes de demo se notifican a `soporte@ramazzini.app`, y el prospecto recibe un correo de seguimiento con el enlace de agendamiento.

Las variables `NEXT_PUBLIC_*` se exponen al navegador y deben contener solo información pública del sitio, enlaces de conversión, medición y datos de contacto.

El sitio carga Google Tag Manager (`GTM-MPW2CTVB`, o el valor de `NEXT_PUBLIC_GTM_ID` si se define). Google Analytics 4 se configura dentro del contenedor GTM; el código del sitio no instala `gtag.js`. Los eventos personalizados se envían al `dataLayer` y GTM decide cómo enviarlos a GA4.

Microsoft Clarity se carga con el proyecto `ylwa6auqar` (o `NEXT_PUBLIC_CLARITY_ID`). Los formularios llevan `data-clarity-mask` para ocultar su contenido en las grabaciones.

## Comandos

```bash
npm run format
npm run lint
npm run build
```

## Rutas

- `/`: landing principal
- `/campana/`: landing de pauta sin navegación, con demo como única conversión
- `/gracias`: paso posterior al envío del formulario, con agendamiento de demo
- `/api/demo`: recepción, validación y envío del formulario por Resend
- `/sitemap.xml`
- `/robots.txt`

## Flujo comercial

El CTA principal dirige al agendamiento de una demo de 45 minutos. El formulario captura datos de contacto y operación; después redirige a `/gracias`, donde el prospecto puede elegir horario en Cal.com. La prueba gratuita se mantiene como opción secundaria en la sección de planes.

Los datos del prospecto se envían únicamente mediante `POST` y no se copian a la URL de agradecimiento ni al iframe de Cal.com. El formulario incluye un campo señuelo, validación en servidor y un límite básico por dirección IP para reducir envíos automatizados.

## Experimento de campaña

Dirige el tráfico de anuncios a `/campana/`. El servidor asigna A o B al 50 % y guarda la variante en una cookie durante 30 días. La variante A presenta el flujo completo; la B pone el foco en evitar capturas repetidas. Ambas usan el mismo formulario y el mismo CTA. La home conserva su contenido para marca y SEO; `/campana/` tiene `noindex`.

Para revisar cada versión en local, abre `/campana/?variant=a` o `/campana/?variant=b`. No uses esos parámetros en los anuncios: fuerzan la asignación y sesgan la prueba. La cookie conserva la variante en las siguientes visitas.

El sitio envía `campaign_exposure` con `campaign_variant` y `page_path` al `dataLayer`. El CTA emite `demo_cta_click`, el primer foco en el formulario emite `demo_form_start` y un envío exitoso emite `generate_lead`; los tres eventos llevan la variante. Clarity recibe la variante como etiqueta personalizada. En GTM hay que publicar el activador y los parámetros de estos eventos para ver el desglose en GA4. La métrica principal es leads enviados por usuarios expuestos a cada variante; un formulario enviado todavía no equivale a una reunión confirmada en Cal.com.

## Entrega

Antes de publicar o entregar cambios al cliente, ejecutar:

```bash
npm run format
npm run lint
npm run build
```

No se deben versionar archivos `.env`, `.env.local`, `.next`, `node_modules` ni archivos temporales del sistema.
