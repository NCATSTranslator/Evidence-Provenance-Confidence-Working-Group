## Data (Source Record Statements) 

### Plain language expression of what each record asserts to be true
  - **Record A:** Fenofibrate binds to PPARA protein (CTD)
  - **Record B:** Fenofibrate results in increased activity of PPARA protein (CTD)
  - **Record C:** Fenofibrate results in increased expression of PPARA (CTD)
  - **Record D:** Bezofuran increases the activity of PPARA (CTD)
  - **Record E:** Bezofuran results in decreased degradation of PPARA (CTD)
  - **Record F:** Okadaic Acid results in increased phosphorylation of PPARA (CTD)


###  Structured Bioink Representations

**Record A:** Fenofibrate binds to PPARA protein (CTD)
````
subject: Fenofibrate
predicate: physically interacts with
object: PPARA
````

**Record B:** Fenofibrate results in increased activity of PPARA protein (CTD)
````
subject: Fenofibrate
predicate: affects
qualified_predicate: causes
object: PPARA 
object_aspect: activity
object_direction: increased
````

**Record C:** Fenofibrate results in increased expression of PPARA (CTD)
````
subject: Fenofibrate
predicate: affects
qualified_predicate: causes
object: PPARA 
object_aspect: expression
object_direction: increased
````

**Record D:** Bezofuran increases the activity of PPARA (CTD)
````
subject: Bezofuran 
predicate: affects
qualified_predicate: causes
object: PPARA 
object_aspect: activity
object_direction: increased
````
  
**Record E:** Bezofuran results in decreased degradation of PPARA (CTD)
````
subject: Bezofuran
predicate: affects
qualified_predicate: causes
object: PPARA
object_aspect: degradation
object_direction: decreased
````

**Record F:** Okadaic Acid results in increased phosphorylation of PPARA (CTD)
````
subject: Okadaic Acid
predicate: affects
qualified_predicate: causes
object: PPARA
object_aspect: phosphorylation
object_direction: increased
````

--------------

## TRAPI Queries

### Q1: What Chemical Entities affect PPARA?

**Expected Results:** Fenofibrate, Bezofuran, and Okadoaic Acid - based on records B, C, D, E, F

**Structured Query:**
````
{
  "message": {
    "query_graph": {
      "nodes": {
        "n0": {
          "category": "biolink:ChemicalSubstance"
        },
        "n1": {
          "id": "HGNC:9232"
        }
      },
      "edges": {
        "e01": {
          "subject": "n0",
          "object": "n1",
          "predicate": [
            "affects"
          ]
        }
      }
    }
  }
}
````

--------

## Q2: What Chemical Entities increase the activity of PPARA?

**Expected Results:** Fenofibrate and Bezofuran - based on records B, D

**Structured Query:**

````

{
  "message": {
    "query_graph": {
      "nodes": {
        "n0": {
          "category": "biolink:ChemicalSubstance"
        },
        "n1": {
          "id": "HGNC:9232"
        }
      },
      "edges": {
        "e01": {
          "subject": "n0",
          "object": "n1",
          "predicate": [
            "affects"
          ],
          "qualifier_constraints": [
            {
              "qualifier_set": [
                {
                  "qualifier_type_id": "biolink:object_aspect",
                  "value": "activity"
                },
                {
                  "qualifier_type_id": "biolink:object_direction",
                  "value": "increased"
                }
              ],
              "constrained_predicate": "biolink:affects"
            }
          ]
        }
      }
    }
  }
}
 ````
**Questions**: 
- Do we need to constrain on the qualified_predicate?

--------

### Q3: What compounds increase the amount or activity of PPARA?

**Expected Results:**  Fenofibrate and Bezofuran - based on records B, C, D, E

**Structured Query:**     
````
{
  "message": {
    "query_graph": {
      "nodes": {
        "n0": {
          "category": "biolink:ChemicalSubstance"
        },
        "n1": {
          "id": "HGNC:9232"
        }
      },
      "edges": {
        "e01": {
          "subject": "n0",
          "object": "n1",
          "predicate": [
            "affects"
          ],
          "qualifier_constraints": [
            {
              "qualifier_set": [
                {
                  "qualifier_type_id": "biolink:object_aspect",
                  "value": "activity"
                },
                {
                  "qualifier_type_id": "biolink:object_direction",
                  "value": "increased"
                }
              ],
              "constrained_predicate": "biolink:affects"
            },
            {
              "qualifier_set": [
                {
                  "qualifier_type_id": "biolink:object_aspect",
                  "value": "abundance"
                },
                {
                  "qualifier_type_id": "biolink:object_direction",
                  "value": "increased"
                }
              ],
              "constrained_predicate": "biolink:affects"
            },
            {
              "qualifier_set": [
                {
                  "qualifier_type_id": "biolink:object_aspect",
                  "value": "degradation"
                },
                {
                  "qualifier_type_id": "biolink:object_direction",
                  "value": "decreased"
                }
              ],
              "constrained_predicate": "biolink:affects"
            }
          ]
        }
      }
    }
  }
}
````
 
**Questions:**
- Is there a way we could infer decreased degradation --> increased abundance so Record E returned even if not explicitly specified?  This was easier to do when aspect and direction were composed in a single predicate - by placing 'decreases degradation of' under 'increases abundance of' in the predicate hierarchy. But with aspect and directions now split into separate qualifiers, how might we derive the same inference? Will need more complex rules.
 
 --------
 
 ### Q4: What compounds increase the activity or phosphorylation of PPARA but not its abundance 
Based on Vlado's example query, but modified 'synthesis' -> 'phosphorylation' (as 'synthesis no longer in CTD data), and modified 'expression' -> 'abundance' (to illustrate need for hierarchical inference) 
  
 **Expected Results:**  Okadaic Acid (based on record F), but not Fenofibrate or Bezofuran despite records Band E asserting these to increase the activity of PPARA - because Fenofibrate and Bezofuran also increases abundance of PPARA (Fenofibrate via increasing its expression, and Bezofuran via decreasing its degradation)
   
   **Structured Query:**
````
{
  "message": {
    "query_graph": {
      "nodes": {
        "n0": {
          "category": "biolink:ChemicalSubstance"
        },
        "n1": {
          "id": "HGNC:9232"
        }
      },
      "edges": {
        "e01": {
          "subject": "n0",
          "object": "n1",
          "predicate": [
            "affects"
          ],
          "qualifier_constraints": [
            {
              "qualifier_set": [
                {
                  "qualifier_type_id": "biolink:object_aspect",
                  "value": "activity"
                },
                {
                  "qualifier_type_id": "biolink:object_direction",
                  "value": "increased"
                }
              ],
              "constrained_predicate": "biolink:affects"
            },
            {
              "qualifier_set": [
                {
                  "qualifier_type_id": "biolink:object_aspect",
                  "value": "synthesis"
                },
                {
                  "qualifier_type_id": "biolink:object_direction",
                  "value": "increased"
                }
              ],
              "constrained_predicate": "biolink:affects"
            },
            {
              "qualifier_set": [
                {
                  "not": "TRUE",
                  "qualifier_type_id": "biolink:object_aspect",
                  "value": "abundance"
                },
                {
                  "qualifier_type_id": "biolink:object_direction",
                  "value": "increased"
                }
              ],
              "constrained_predicate": "biolink:affects"
            },
            {
              "qualifier_set": [
                {
                  "not": "TRUE",
                  "qualifier_type_id": "biolink:object_aspect",
                  "value": "degradation"
                },
                {
                  "qualifier_type_id": "biolink:object_direction",
                  "value": "decreased"
                }
              ],
              "constrained_predicate": "biolink:affects"
            }
          ]
        }
      }
    }
  }
}
 ````
 
 **Questions:**
 - Consider direction of hierarchical inference/query expansion here, when not = TRUE. When not = FALSE, expand queried term down its sub-hierarchies. When not = TRUE, I think we also expand queried term down its sub-hierarchies.
