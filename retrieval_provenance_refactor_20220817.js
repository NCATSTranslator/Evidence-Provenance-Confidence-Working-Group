## See Goodle Doc here for background, a description of modeled retrieval scenarios, and rationale behind each modeling proposal: https://docs.google.com/document/d/11RKh4d4XPGV0a6V--xvpjBFO7RnnT2BZkNzGbakt0a0/edit#

## ----------

## Candidate 1 Examples:

  ## Scenario 1: Knowledge Retrieval - four edges from one primary source merged to one edge
  
  {
  "edges": {
    "id": "e719491"
    "subject": "RXCUI:1544384",
    "predicate": "biolink:correlated_with",
    "object": "MONDO:0008383",
    "retrievals": [
      {                                        # R1
      "id": "re25ac984b7kbkp1",                # Ids for these object only necessary if we need to refer to them. e.g. we may want each RetrievalEvent to explicitly refer to the RetrievalEvent(s) that preceded it. But I think we decided this is not necessary, as it can be deduced from the source/target data in each object.
      "type": biolink:RetrievalEvent,
      "source": "infores:KS_1",
      "source_role": "primary",
      "target": "infores:KP_1",
      "target_role": "aggregator"
      },
      {                                        # R2
      "id": "re83bb198c8kbkp2",
      "type": biolink:RetrievalEvent,
      "source": "infores:KS_1",
      "source_role": "primary",
      "target": "infores:KP_2",
      "target_role": "aggregator"        
      },
      {                                        # R3
      "id": "re75bb123a8kbkp3",
      "type": biolink:RetrievalEvent,
      "source": "infores:KS_1",
      "source_role": "primary",
      "target": "infores:KP_3",
      "target_role": "aggregator"
      },
      {                                        # R4
      "id": "re41ac943b2kp1ara1",
      "type": biolink:RetrievalEvent,
      "source": "infores:KP1",
      "source_role": "aggregator",
      "target": "infores:ARA_1",
      "target_role": "aggregator",
      "prior_retrieval": ["re25ac984b7kbkp1"]  # Likely not necessary to explicitly record the prior retrieval event(s), as noted above.  If we don't, we may also want to eliminated the ids for these object.
      },
      {                                        # R5
      "id": "re82ab873a9kp2ara1",
      "type": biolink:RetrievalEvent,
      "source": "infores:KP2",
      "source_role": "aggregator",
      "target": "infores:ARA_1",
      "target_role": "aggregator",
      "prior_retrieval": ["re83bb198c8kbkp2"]
      },
      {                                        # R6
      "id": "re47aa825c7kp1ara2",
      "type": biolink:RetrievalEvent,
      "source": "infores:KP1",
      "source_role": "aggregator",
      "target": "infores:ARA_2",
      "target_role": "aggregator",
      "prior_retrieval": ["re25ac984b7kbkp1"]
      },
      {                                        # R7
      "id": "re34bb814c6kp3ara21",
      "type": biolink:RetrievalEvent,
      "source": "infores:KP3",
      "source_role": "aggregator",
      "target": "infores:ARA_2",
      "target_role": "aggregator",
      "prior_retrieval": ["re75bb123a8kbkp3"]
       },
       {                                        # R8
       "id": "re61bb249a4ara1wr",
       "type": biolink:RetrievalEvent,
       "source": "infores:ARA1",
       "source_role": "aggregator",
       "target": "infores:WR",
       "target_role": "aggregator",
       "prior_retrieval": ["re41ac943b2kp1ara1", "re82ab873a9kp2ara1"]
        },
        {                                       # R9
        "id": "re32bb725c9ara2wr",
        "type": biolink:RetrievalEvent,
        "source": "infores:ARA2",
        "source_role": "aggregator",
        "target": "infores:WR",
        "target_role": "aggregator",
        "prior_retrieval": ["re47aa825c7kp1ara2", "re34bb814c6kp3ara2"]
        }
      ]
    }
    
  
  ## Scenario 2: Knowledge Retrieval - six edges from two primary sources merged to two edges
  
    # This example will include all data from Scenario 1 (which represents the first of two merged edges relevant for Scenario 2). Plus the data below representing the second merged edge. 
  
  {
  "edges": { 
    "id": "e21aa4542"                # This is the second Edge that gets created for the knolwedge as originating in KS2, even though it represents the same SPO statement as the Edge originating in KS1 as represented above.
    "subject": "RXCUI:1544384",
    "predicate": "biolink:correlated_with",
    "object": "MONDO:0008383",
    "retrievals": [
     {                                # R10
     "id": "re52ba891b4kb2kp1", 
     "type": biolink:RetrievalEvent,
      "source": "infores:KS2",
      "source_role": "primary",
      "target": "infores:KP_1",
      "target_role": "aggregator",
      },
      {                                # R11
      "id": "re43ab256b7kp1ara1",    # Note that the content of this object is identical to that of one in the other edge - which would give the same hashed id,  unless we include the edge id in computing the hash (which I think we should for this reason . . . we want these hash ids to be different)
      "type": biolink:RetrievalEvent,
      "source": "infores:KP1",
      "source_role": "aggregator",
      "target": "infores:ARA_1",
      "target_role": "aggregator",
      "prior_retrieval": ["re52ba891b4kb2kp1"]
      },
      {                                # R12
      "id": "re68aa815c7kp1ara2",
      "type": biolink:RetrievalEvent,
      "source": "infores:KP1",
      "source_role": "aggregator",
      "target": "infores:ARA_2",
      "target_role": "aggregator",
      "prior_retrieval": ["re52ba891b4kb2kp1"]
      },
      {                                # R13
      "id": "re72ba249b3ara1wr",
      "type": biolink:RetrievalEvent,
      "source": "infores:ARA1",
      "source_role": "aggregator",
      "target": "infores:WR",
      "target_role": "aggregator",
      "prior_retrieval": ["re43ab256b7kp1ara1"]
      },
      {                                # R14
      "id": "re72bc725c7ara2wr",
      "type": biolink:RetrievalEvent,
      "source": "infores:ARA2",
      "source_role": "aggregator",
      "target": "infores:WR",
      "target_role": "aggregator",
      "prior_retrieval": ["re68aa815c7kp1ara2"]
      }
   ]
 }
  
  
  ## Scenario 3: Knowledge Creation from  Data - two edges from one primary source merged to one edge
 {
  "edges": { 
    "id": "e21aa4542"                
    "subject": "RXCUI:1544384",
    "predicate": "biolink:correlated_with",
    "object": "MONDO:0008383",
    "retrievals": [
      {                                # R10
      "id": "re52ba891b4kb2kp1", 
      "type": biolink:RetrievalEvent,
      "source": "infores:KS2",
      "source_role": "primary",
      "target": "infores:KP_1",
      "target_role": "aggregator",
      },
  
  
  
  ##--------------------------------------------------------------------------------------##
  
## Candidate 2 Examples
  
  ## Scenario 1: Knowledge Retrieval - four edges from one primary source merged to one edge
  
  {
  "edges": {
    "id": "e719491"
    "subject": "RXCUI:1544384",
    "predicate": "biolink:correlated_with",
    "object": "MONDO:0008383",
    "sources": [
      {                                        
      "id": "re25ac984b7235",               # Ids for these object only necessary if we need to refer to them.
     "type": biolink:Source,
     "resource": "infores:KS_1",
     "resource_role": "primary",
      },
      {                                        # R1
      "id": "re83bb198c873y",
      "type": biolink:Source
      "resource": "infores:KP_1",
      "resource_role": "aggregator",
      "upstream_resource": ["infores:KS_1"]      
      },
      {                                        # R2
      "id": "re75bb123a8k546836t",
      "type": biolink:Source,
      "resource": "infores:KP_2",
      "resource_role": "aggregator",
      "upstream_resource": ["infores:KS_1"]
      },
      {                                        # R3
      "id": "re41ac943b2670245",
      "type": biolink:Source,
      "resource": "infores:KP_3",
      "resource_role": "aggregator",
      "upstream_resource": ["infores:KS_1"]
      },
      {                                        # R4, R5
      "id": "re82ab873a93687325",
      "type": biolink:Source,
      "resource": "infores:ARA1",
      "resource_role": "aggregator",
      "upstream_resource": ["infores:KP_1", "infores:KP_2"]
      },
      {                                        # R6, R7
      "id": "re82ab873a9635794tt",
      "type": biolink:Source,
      "resource": "infores:ARA2",
      "resource_role": "aggregator",
      "upstream_resource": ["infores:KP_1", "infores:KP_3"]
      },
      {                                        # R8, R9
      "id": "re82ab873a9e57jnf",
      "type": biolink:Source,
      "resource": "infores:WR",
      "resource_role": "aggregator",
      "upstream_resource": ["infores:ARA_1", "infores:ARA_2"]
      },
   ]
 }
  
  
  ## Scenario 2: Knowledge Retrieval - six edges from two primary sources merged to two edges
  
    # This example will include all data from Scenario 1 (which represents the first of two merged edges relevant for Scenario 2). Plus the data below representing the second merged edge. 
  
  {
  "edges": { 
    "id": "e21aa4542"                    # This is the second Edge that gets created for the knolwedge as originating in KS2, even though it represents the same SPO statement as the Edge originating in KS1 as represented above.
    "subject": "RXCUI:1544384",
    "predicate": "biolink:correlated_with",
    "object": "MONDO:0008383",
    "sources": [
      {                                        
      "id": "re25ac984efb743",              # Ids for these object only necessary if we need to refer to them. 
      "type": biolink:Source,
      "resource": "infores:KS_2",
      "resource_role": "primary",
      },
      {                                        # R10
      "id": "re83bb19esgno7",
      "type": biolink:Source,
      "resource": "infores:KP_1",
      "resource_role": "aggregator",
      "upstream_resource": ["infores:KS_2"]      
      },
      {                                        # R11
      "id": "re83bb19fasdh83",
      "type": biolink:Source,
      "resource": "infores:ARA_1",
      "resource_role": "aggregator",
      "upstream_resource": ["infores:KP_1"]      
      },
      {                                        # R12
      "id": "re83bb19843ga8",
      "type": biolink:Source,
      "resource": "infores:ARA_2",
      "resource_role": "aggregator",
      "upstream_resource": ["infores:KP_1"]      
      },
      {                                        # R13, R14
      "id": "re83bb198ccau864",
      "type": biolink:Source,
      "resource": "infores:WR",
      "resource_role": "aggregator",
      "upstream_resource": ["infores:ARA_1", "infores:ARA_2"]      
      },
   ]
 }
    
  
  ## Scenario 3: Knowledge Creation from  Data - two edges from one primary source merged to one edge
  
