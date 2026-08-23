# SKYLINE deployment preflight

Target: `167.233.221.39` · domain: `skylineengineering.es`

## Required before public launch

1. Create `/var/www/skyline-engineering/.env.production` from `.env.example`.
2. Set a real `RESEND_API_KEY` and verify `skylineengineering.es` in Resend so the contact form can deliver to `780443k4@gmail.com`.
3. Confirm that DNS records for both `skylineengineering.es` and `www` point to the server.
4. Install `deploy/nginx-http.conf` first, issue a Let's Encrypt certificate, then enable `deploy/nginx.conf`.

Never upload `.env.production`, SSH keys or passwords in the site archive.

## Server commands

```bash
sudo mkdir -p /var/www/skyline-engineering
sudo chown -R "$USER":www-data /var/www/skyline-engineering
cd /var/www/skyline-engineering
npm ci
npm run build
sudo chown -R www-data:www-data /var/www/skyline-engineering

sudo cp deploy/skyline.service /etc/systemd/system/skyline.service
sudo cp deploy/nginx-rate-limit.conf /etc/nginx/conf.d/skyline-rate-limit.conf
sudo cp deploy/nginx-http.conf /etc/nginx/sites-available/skyline-engineering.conf
sudo ln -sfn /etc/nginx/sites-available/skyline-engineering.conf /etc/nginx/sites-enabled/skyline-engineering.conf

sudo systemctl daemon-reload
sudo systemctl enable --now skyline
sudo nginx -t
sudo systemctl reload nginx

# First launch only: issue and install the public HTTPS certificate.
sudo apt-get install -y certbot python3-certbot-nginx
sudo certbot --nginx -d skylineengineering.es -d www.skylineengineering.es

# For subsequent deployments, keep the existing Let's Encrypt certificate and
# use deploy/nginx.conf as the canonical HTTPS configuration.
```

## Verification

```bash
systemctl --no-pager --full status skyline
curl -I http://127.0.0.1:3000/
curl -I https://skylineengineering.es/
curl -I https://skylineengineering.es/images/hero/villa-hero.jpg
```

After launch, verify `/`, `/villas`, `/process`, `/about`, `/contact`, `/sitemap.xml` and `/robots.txt`, then submit a real contact-form test and confirm that it arrives in the inbox.
