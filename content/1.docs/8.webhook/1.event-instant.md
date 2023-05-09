# Event (Instant)
Silahkan baca dokumentasi event express terlebih dulu untuk menyelesaikan dokumentasi ini

## Payment Confirmed
```json
{
  "method": "instant_payment_confirmed",
  "data": [
    {
      "payment_id": "PID-00001",
      "paid_at": "2022-07-08 00:00:00"
    }
  ]
}
```

## Validated Packages

```json
{
  "method": "instant_validated_packages",
  "data": [
    {
      "order_id": "OID-00001",
      "shipping_cost": 20000,
      "insurance": true,
      "insurance_amount": 5000
    }
  ]
}
```

## Finished Packages

```json
{
  "method": "instant_finished_packages",
  "data": [
    {
      "order_id": "OID-00001",
      "finished_at": "2022-07-08 00:00:00"
    }
  ]
}
```

## Rejected Packages

```json
{
  "method": "instant_rejected_packages",
  "data": [
    {
      "order_id": "OID-00001",
      "rejected_at": "2022-07-08 00:00:00",
      "rejected_reason": "Destination not found"
    }
  ]
}
```

## Canceled Packages

```json
{
  "method": "instant_canceled_packages",
  "data": [
    {
      "order_id": "OID-00001",
      "canceled_at": "2022-07-08 00:00:00",
      "canceled_reason": "Wait too long"
    }
  ]
}
```

## Allocated Packages

```json
{
  "method": "instant_allocated_packages",
  "data": [
    {
      "order_id": "OID-00001",
      "allocated_at": "2022-07-08 00:00:00"
    }
  ]
}
```
