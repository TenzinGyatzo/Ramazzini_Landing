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
NEXT_PUBLIC_CONTACT_EMAIL=soporte@ramazzini.app
NEXT_PUBLIC_SUPPORT_EMAIL=soporte@ramazzini.app
NEXT_PUBLIC_CONTACT_PHONE=
```

Las variables `RESEND_API_KEY`, `RESEND_FROM` y `DEMO_NOTIFY_TO` se usan solo en el servidor para procesar el formulario. El formulario valida los campos requeridos antes de enviar correos por Resend. Si `RESEND_API_KEY` no está configurada o el envío falla, el sitio muestra una alternativa para reintentar o continuar por WhatsApp; nunca confirma una solicitud que no pudo procesar.

Para producción, cargar estos valores en el panel del proveedor de hosting. No se debe subir `RESEND_API_KEY` a GitHub. Las solicitudes de demo se notifican a `soporte@ramazzini.app`, y el prospecto recibe un correo de seguimiento con el enlace de agendamiento.

Las variables `NEXT_PUBLIC_*` se exponen al navegador y deben contener solo información pública del sitio, enlaces de conversión, medición y datos de contacto.

El sitio carga Google Tag Manager (`GTM-MPW2CTVB`, o el valor de `NEXT_PUBLIC_GTM_ID` si se define). Google Analytics 4 se configura dentro del contenedor GTM; el código del sitio no instala `gtag.js`. Los eventos personalizados se envían al `dataLayer` y GTM decide cómo enviarlos a GA4.

## Comandos

```bash
npm run format
npm run lint
npm run build
```

## Rutas

- `/`: landing principal
- `/gracias`: paso posterior al envío del formulario, con agendamiento de demo
- `/api/demo`: recepción, validación y envío del formulario por Resend
- `/sitemap.xml`
- `/robots.txt`

## Flujo comercial

El CTA principal dirige al agendamiento de una demo de 45 minutos. El formulario captura datos de contacto y operación; después redirige a `/gracias`, donde el prospecto puede elegir horario en Cal.com. La prueba gratuita se mantiene como opción secundaria en la sección de planes.

Los datos del prospecto se envían únicamente mediante `POST` y no se copian a la URL de agradecimiento ni al iframe de Cal.com. El formulario incluye un campo señuelo, validación en servidor y un límite básico por dirección IP para reducir envíos automatizados.

## Entrega

Antes de publicar o entregar cambios al cliente, ejecutar:

```bash
npm run format
npm run lint
npm run build
```

No se deben versionar archivos `.env`, `.env.local`, `.next`, `node_modules` ni archivos temporales del sistema.
