from django.db import models
from django.utils.text import slugify


class Product(models.Model):

    # CORE INFO
    name = models.CharField(max_length=255)
    slug = models.SlugField(unique=True, blank=True)

    description = models.TextField(blank=True)

    # PRICING (consistent + scalable)
    price = models.DecimalField(max_digits=12, decimal_places=2)
    discount_price = models.DecimalField(
        max_digits=12,
        decimal_places=2,
        null=True,
        blank=True
    )
    currency = models.CharField(max_length=10, default="NGN")

    # INVENTORY SYSTEM
    stock = models.PositiveIntegerField(default=0)
    low_stock_threshold = models.PositiveIntegerField(default=5)

    # STATUS CONTROL (like Shopify/Amazon)
    is_active = models.BooleanField(default=True)
    is_featured = models.BooleanField(default=False)

    # CATEGORY
    category = models.CharField(max_length=120, blank=True)

    # MAIN IMAGE (primary display)
    image = models.ImageField(upload_to='products/', null=True, blank=True)

    # TIMESTAMPS (FIXED - no duplication)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ['-created_at']

    def __str__(self):
        return self.name

    # AUTO SLUG GENERATION (VERY IMPORTANT)
    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify(self.name)
        super().save(*args, **kwargs)


# MULTI IMAGE SUPPORT (AMAZON STYLE)
class ProductImage(models.Model):
    product = models.ForeignKey(
        Product,
        related_name='images',
        on_delete=models.CASCADE
    )

    image = models.ImageField(upload_to='products/')
    is_primary = models.BooleanField(default=False)

    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.product.name} Image"