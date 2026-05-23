
# UUID

- UUID = **Universally** **U**nique **ID**entifier 

## Biblioteca

```
// bash
>> npm nstall uuid


// file.js
import { v4 as uuidv4 } from 'uuid';

const id = uuidv4() // >> 550e8400-e29b-41d4-a716-446655440000
```

## Nativo

```
const id = crypto.randomUUID();
```